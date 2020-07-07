import React from "react";
import styled from "styled-components";

const BeforeStyled = styled.div`
  cursor: pointer;
  background-size: 45px 45px;
`;

function Before() {
  return (
    <BeforeStyled>
      <img src="images/arrow-left.svg" alt="" />
    </BeforeStyled>
  );
}

export default Before;
