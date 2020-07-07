import React, { useContext } from "react";
import styled from "styled-components";

import CharacterContext from "./character-context";

const NextStyled = styled.div`
  cursor: pointer;
  background-size: 45px 45px;
`;

function Next() {
  const value = useContext(CharacterContext);
  console.log(value);
  return (
    <NextStyled>
      <img src="images/arrow-right.svg" alt="" />
    </NextStyled>
  );
}

export default Next;
