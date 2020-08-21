import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import Response from "../../Response";

const SearchPage = () => {
  const location = useLocation();
  const term = location.pathname.split("/")[2];
  //   const { data } = useGoogleSearch(term);
  const data = Response;

  return (
    <div className="searchPage">
      <div className="searchPageHeader"></div>
      <div className="searchPageBody"></div>
    </div>
  );
};

export default SearchPage;
