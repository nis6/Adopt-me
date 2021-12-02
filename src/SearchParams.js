import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("India, Delhi"); //
  const [animal, setAnimal] = useState(""); //
  const [breed, setBreed] = useState(""); //pass in the default value here ""
  const [pets, setPets] = useState([]);
  const [breeds]= useBreedList(animal);//this hook/state depends on another state (hook)
  const ANIMALS = ["dog", "cat", "bird", "tiger"]; //having all these states in one?
 
  useEffect(() => {
    //all of the asynch code
    requestPets();
  }, []); //eslint-disable-line
   //[] to stop after once //run anytime when animal(state) updates

  async function requestPets() {
        const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();

        console.log(json);
        setPets(json.pets); //;->triggers render ->setPets();->trigger render ...                 //causes infinite loo
    }

  return (
    <div className="search-params">
      <form onSubmit={
          (e)=>{
                e.preventDefault();
                requestPets();
          }
      }>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option /> {/*equivalent to <option></option>*/}
            
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}

          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option /> {/*equivalent to <option></option>*/}
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets= {pets} />
    </div>
  );
};

export default SearchParams;
