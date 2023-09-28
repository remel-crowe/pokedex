import React from "react";
import "./search-bar.styles.css";

const SearchBar = (props) => {
  return (
    <input
      className={props.className}
      type="search"
      onChange={props.onChangeHandler}
      placeholder={props.placeholder}
    />
  );
};

export default SearchBar;
