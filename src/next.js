import React, { useContext } from "react";
import styled from "styled-components";
import NProgress from "nprogress";
import { useHistory } from "react-router-dom";

import CharacterContext from "./character-context";
// import api from "./api";

const NextStyled = styled.div`
  cursor: pointer;
  background-size: 45px 45px;
`;

function Next() {
  const context = useContext(CharacterContext);
  const history = useHistory();
  // console.log(context);
  async function handleClick() {
    NProgress.start();
    history.push(`/${context.character.id + 1}`);
    // context.setCharacter(await api.getCharacter(context.character.id + 1));
    NProgress.done();
  }
  return (
    <NextStyled onClick={handleClick}>
      <img src="images/arrow-right.svg" alt="" />
    </NextStyled>
  );
}

export default Next;
