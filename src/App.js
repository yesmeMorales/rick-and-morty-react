import React, { useEffect, useState, createContext } from "react";
import "./App.css";

// import Character from "./character";
import CharacterName from "./character-name";
import CharacterImage from "./character-image";
import CharacterDescription from "./character-description";
import CharacterPlaceHolder from "./character-placeholder";
import Next from "./next";
import Before from "./before";
import Layout from "./layout";
import CharacterContex from "./character-context";

import API from "./api";

//Instancia APIt
const api = new API();
// nos devuelve  un provider

function App() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1));
      // const character = await api.getCharacter(1);
      // console.log(character);
    }
    getCharacter();
  }, []);
  return (
    <CharacterContex.Provider value="rick and morty">
      <div className="App">
        <CharacterPlaceHolder name={character.name} />
        <Layout
          before={<Before />}
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={
            <CharacterImage name={character.name} image={character.image} />
          }
          description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
        />
      </div>
    </CharacterContex.Provider>
  );
}

export default App;
