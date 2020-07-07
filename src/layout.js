import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.div`
  .grid-name-area {
    grid-area: character-name;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    /* padding-inline-start: 1em; */
  }
  .grid-image-area {
    grid-area: avatar;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-description-area {
    grid-area: character-description;
  }

  .grid-arrows-area {
    grid-area: arrow;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  @media screen and (max-width: 1024px) {
    .grid-name-area {
      margin-top: 1em;
      justify-content: center;
    }
  }
`;

function Layout({ name, image, description, next, before }) {
  return (
    <LayoutStyled>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img
          src="images/logo@2x.png"
          alt="Text rick and morty"
          width="280"
          className="logo"
        />
        <input
          type="text"
          className="search"
          defaultValue=""
          id="searchh"
          placeholder="Search character"
        />
        <div className="social">
          <a href="https://instagram.com/chesminm">
            <img src="images/instagram.svg" alt="logo instagram" />
          </a>
          <a href="https://facebook.com/ymoralesteran">
            <img src="images/facebook.svg" alt="logo instagram" />
          </a>
          <a href="https://twitter.com/ChessMinn">
            <img src="images/twitter.svg" alt="logo instagram" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>

        <div className="grid-name-area">{name}</div>

        <div className="grid-image-area">{image}</div>

        <div className="navigation about">
          <a href="#">About</a>
        </div>

        <div className="grid-description-area">{description}</div>

        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>

        <div className="grid-arrows-area">
          {before}
          {next}
        </div>
      </div>
    </LayoutStyled>
  );
}

export default Layout;
