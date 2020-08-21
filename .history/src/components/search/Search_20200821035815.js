import React from "react";
import "./Search.css";
import {Search as SearchIcon,Mic} from "@material-ui/icons"

const Search = () => {
  return (
    <div className="search">
      <div className="searchInput">
        <SearchIcon className="homepageSearchIcon"/>
        <input />
        <Mic />
      </div>
    </div>
  );
};

export default Search;
