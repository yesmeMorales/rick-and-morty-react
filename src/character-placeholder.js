import React from "react";
import styled from "styled-components";

const CharacterPlaceHolderStyled = styled.div`
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .character-name-placeholder {
    color: rgba(0, 0, 0, 0.1);
    font-size: 600px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    z-index: 1;
    white-space: nowrap;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

function CharacterPlaceHolder({ name }) {
  return (
    <CharacterPlaceHolderStyled>
      <h1 className="character-name-placeholder">{name}</h1>
    </CharacterPlaceHolderStyled>
  );
}

export default CharacterPlaceHolder;
