import React from "react";
import styled from "styled-components";

const CharacterImageStyled = styled.img`
  max-width: 100%;
  /* width: auto; */
  border-radius: 50%;
  animation: bounce-in-top 2s both;
`;

function CharacterImage({ image, name }) {
  return <CharacterImageStyled src={image} alt={name} />;
}

export default CharacterImage;
