import React from "react";
import styled from "styled-components";

const SocialStyled = styled.div`
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    a {
      margin-left: 2em;
    }

    a:first-child {
      margin-left: 0;
    }
  }
`;

function Social() {
  return (
    <SocialStyled>
      <a href="https://instagram.com/chesminm">
        <img src="images/instagram.svg" alt="logo instagram" />
      </a>
      <a href="https://facebook.com/ymoralesteran">
        <img src="images/facebook.svg" alt="logo instagram" />
      </a>
      <a href="https://twitter.com/ChessMinn">
        <img src="images/twitter.svg" alt="logo instagram" />
      </a>
    </SocialStyled>
  );
}

export default Social;
