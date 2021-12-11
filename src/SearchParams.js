import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {

    const [location, setLocation] = useState("India, Delhi"); //
    const [animal, setAnimal] = useState(""); //  ANIMALS manually given
    const [breed, setBreed] = useState(""); //pass in the default value here ""
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal); //based on animal state we request breeds //just a custom hook to add abstraction to a common logic
    const ANIMALS = ["dog", "cat", "bird", "tiger"]; 
    const COLORS = ["blue", "black", "pink", "green", "purple", "cyan"];
    const [theme,setTheme] = useContext(ThemeContext);

  //this function / hook runs right after component has been changed [after every render]
  useEffect(() => {
    //all of the asynch calls go in here, because it can effect the other components so can't run at the same time as render
    requestPets();

  }, []); //eslint-disable-line
  //[] to stop after once //run anytime when animal(state) updates

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json)
    setPets(json.pets); //;->triggers render ->setPets();->trigger render ...                 
  }
  
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option /> {/*equivalent to <option></option>*/}
            {COLORS.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
                      {/* the style string inside html , goes as an object in here*/}
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
