import React from "react";
import styled from "styled-components";

const LogoStyled = styled.img`
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

function Logo() {
  return (
    <LogoStyled
      src="images/logo@2x.png"
      alt="Text rick and morty"
      width="280"
    />
  );
}

export default Logo;
