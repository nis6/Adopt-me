import { useState, useEffect } from "react";

const localCache = {}; //local casche to store the already requestes breed list for an animal

export default function useBreedList(animal) {
  //have to pass the animal state in this hook
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache([animal]));
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      console.log("animal " + animal);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      console.log("json--" + json);
      console.log("animal breeds--" + localCache[animal]);
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  console.log("breed list " + breedList);
  return [breedList, status];
}
