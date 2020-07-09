import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./global-styles";

import CharacterDescription from "./character-description";
import CharacterPlaceHolder from "./character-placeholder";
import CharacterName from "./character-name";
import CharacterImage from "./character-image";
import Next from "./next";
import Before from "./before";
import Layout from "./layout";
import CharacterContex from "./character-context";

import api from "./api";

//Instancia API
// const api = new API();

const CharacterStyled = styled.div``;

function Character({ match, history }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    console.log(match.params.id);
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1));
      // const character = await api.getCharacter(1);
      // console.log(character);
    }
    getCharacter();
  }, [match.params.id]);
  return (
    <CharacterStyled>
      <CharacterContex.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        {/* <div className="App"> */}
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
        {/* </div> */}
      </CharacterContex.Provider>
    </CharacterStyled>
  );
}

export default Character;
