import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const term = location.pathname.split("/")[2];
  const [results, setResults] = useState([]);

  useEffect(() => {}, [location.pathname]);
  return <div className="searchPage">sp</div>;
};

export default SearchPage;
