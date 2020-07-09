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
    if (context.character.id >= 1 && context.character.id < 591) {
      history.push(`${process.env.PUBLIC_URL}/${context.character.id + 1}`);
    } else {
      history.push(`${process.env.PUBLIC_URL}/${context.character.id}`);
    }
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
