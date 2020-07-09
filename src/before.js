import React, { useContext } from "react";
import styled from "styled-components";
import NProgress from "nprogress";
import { useHistory } from "react-router-dom";

import CharacterContext from "./character-context";

const BeforeStyled = styled.div`
  cursor: pointer;
  background-size: 45px 45px;
`;

function Before() {
  const context = useContext(CharacterContext);
  const history = useHistory();
  // console.log(context);
  async function handleClick() {
    NProgress.start();
    if (context.character.id > 1 && context.character.id < 592) {
      history.push(`${process.env.PUBLIC_URL}/${context.character.id - 1}`);
    } else {
      history.push(`${process.env.PUBLIC_URL}/${context.character.id}`);
    }

    // context.setCharacter(await api.getCharacter(context.character.id + 1));
    NProgress.done();
  }

  return (
    <BeforeStyled onClick={handleClick}>
      <img src="images/arrow-left.svg" alt="" />
    </BeforeStyled>
  );
}

export default Before;
