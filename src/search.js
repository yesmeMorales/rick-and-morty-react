import React from "react";
import styled from "styled-components";

const SearchStyled = styled.input`
  /* .search { */
  /* grid-area: search; */
  /* margin: 3em 0; */
  width: 200px;
  height: 45px;
  border-radius: 8px;
  border: none;
  padding: 5px 20px;
  outline: none;
  /* } */

  @media screen and (max-width: 1024px) {
    margin: 40px calc(50vw - 6em);
  }
  @media screen and (max-width: 768px) {
    margin: 40px calc(50vw - 6em);
  }
`;

function Search({ handleChange, inputValue, setInputValue }) {
  function handleChangeName(e) {
    const name = e.target.value;
    setInputValue(name);
    handleChange(name);
  }
  return (
    <SearchStyled
      type="search"
      className="search"
      value={inputValue}
      id="searchh"
      placeholder="Search character"
      onChange={handleChangeName}
    />
  );
}

export default Search;
