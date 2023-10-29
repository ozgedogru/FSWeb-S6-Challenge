import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterList from "./components/Karakter";
import Search from "./components/Search";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const searchResults = characters.filter((character) =>
      character.name.includes(search)
    );
    setFilteredCharacters(searchResults);
  }, [search, characters]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Search search={search} handleChange={handleChange}></Search>
      <CharacterList characters={filteredCharacters}></CharacterList>
    </div>
  );
};

export default App;
