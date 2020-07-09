import React from "react";
import styled from "styled-components";

const LearnMoreStyled = styled.p`
  padding: 15px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  font-size: 25px;
  background-image: url("/images/learn-more.svg");
  background-repeat: no-repeat;
  /* background-position: right bottom; */
  background-position: left 185px bottom 15px;
  background-size: 100px 25px;
  @media screen and (max-width: 1036px) {
    background-size: 120px 20px;
  }
  @media screen and (max-width: 1440px) {
    background-size: 170px 20px;
  }
`;

function LearnMore() {
  return <LearnMoreStyled>Learn More</LearnMoreStyled>;
}

export default LearnMore;
