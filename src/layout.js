import React from "react";
import styled from "styled-components";

import Social from "./social";
import Logo from "./logo";
import Dot from "./dot";
import Line from "./line";
import LearnMore from "./learn-more";
import NavigationItem from "./navigation-item";

const LayoutStyled = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  height: calc(100vh - 8em);
  padding: 4em;
  grid-template-columns: 50px 1fr 1fr 200px;
  grid-template-rows: 230px 120px 1fr 1fr 1fr;
  column-gap: 8em;
  grid-template-areas: "asset-top logo logo social" "name character-name search search" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow arrow";

  .logo-area {
    grid-area: logo;
    margin: 0 auto 2em;
    display: block;
  }

  .social-area {
    grid-area: social;
  }
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
    margin-top: 2em;
  }
  .grid-description-area {
    grid-area: character-description;
    margin-top: 2em;
  }

  .grid-arrows-area {
    grid-area: arrow;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6em;
  }

  .learn-more-area {
    grid-area: learn-more;
    margin-top: calc(10vh);
  }

  .asset-area {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
  }

  .asset-area .top {
    grid-area: asset-top;
  }

  .asset-area.bottom {
    grid-area: asset-bottom;
    justify-content: flex-end;
  }

  .navigation-area {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    &.name {
      grid-area: name;
    }
    &.about {
      grid-area: about;
    }
  }

  .search-area {
    grid-area: search;
    margin: auto auto;
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 2em 0;
    width: calc(100vw - 2em);
    margin: 0 auto;
    column-gap: 1em;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-rows: repeat(7, auto);
    /* grid-template-rows: auto 300px 60px 1fr 1fr; */
    grid-template-areas: "logo logo logo" "search search search" "name avatar avatar" "name character-name character-name" "about character-description character-description" "arrow arrow arrow" "social social social";
    /* grid-template-areas: "asset-top logo logo social" "name character-name avatar avatar" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow another-line"; */

    .grid-name-area {
      margin-top: 1em;
      justify-content: center;
    }
    .social-area {
      text-align: center;
      margin-top: 2em;
    }
    .logo-area {
      max-width: 100%;
    }

    .learn-more-area {
      display: none;
      padding-inline-start: 1em;
    }

    .asset-area {
      display: none;
    }
    .grid-arrows-area {
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 1440px) {
    column-gap: 2em;
    .search-area {
      margin: auto auto;
    }
  }
`;

function Layout({ name, image, description, next, before, search }) {
  return (
    <LayoutStyled>
      <span className="asset-area top">
        <Dot />
        <Dot />
        <Dot />
        <Line />
      </span>

      <div className="logo-area">
        <Logo />
      </div>

      <div className="search-area">{search}</div>

      <div className="social-area">
        <Social />
      </div>

      <div className="navigation-area name">
        <NavigationItem url={"#"} text={"name"} />
      </div>

      <div className="grid-name-area">{name}</div>

      <div className="grid-image-area">{image}</div>

      <div className="navigation-area about">
        <NavigationItem url={"#"} text={"about"} />
      </div>

      <div className="grid-description-area">{description}</div>

      <span className="asset-area bottom">
        <Line />
        <Dot />
        <Dot />
        <Dot />
      </span>

      <div></div>
      <div className="learn-more-area">
        <LearnMore />
      </div>

      <div className="grid-arrows-area">
        {before}
        {next}
      </div>
    </LayoutStyled>
  );
}

export default Layout;
