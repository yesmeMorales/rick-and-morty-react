import React from "react";
import styled from "styled-components";

const LearnMoreStyled = styled.p`
  padding: 0 25px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  font-size: 25px;
  background-image: url("./images/learn-more.svg");
  background-repeat: no-repeat;
  /* background-position: right bottom; */
  background-position: left 195px bottom 5px;
  background-size: 140px 20px;
  @media screen and (max-width: 1300px) {
    background-size: 120px 20px;
  }
  @media screen and (max-width: 1440px) {
    background-size: 150px 20px;
  }
`;

function LearnMore() {
  return <LearnMoreStyled>Learn More</LearnMoreStyled>;
}

export default LearnMore;
