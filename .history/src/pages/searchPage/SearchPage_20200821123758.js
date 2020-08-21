import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const term = location.pathname.split("/")[2];
  const [results, setResults] = useState([]);
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  console.log(KEY)

  useEffect(() => {}, [location.pathname]);
  return <div className="searchPage">
      <div className="searchPageHeader">

      </div>
      <div className="searchPageBody"></div>
  </div>;
};

export default SearchPage;
