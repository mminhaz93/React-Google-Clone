import React, { useState } from "react";
import "./Search.css";
import { Search as SearchIcon, Mic } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    input && history.push(`/search/${input}`);
  };
  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="searchButtons">
          <Button type="submit" variant="outlined" onClick={handleSearch}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="searchButtons">
          <Button
            className="searchButtonsHidden"
            type="submit"
            variant="outlined"
            onClick={handleSearch}
          >
            Google Search
          </Button>
          <Button className="searchButtonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
