import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useLocation, Link } from "react-router-dom";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import Response from "../../Response";
import Search from "../../components/search/Search";
import {
  Search as SearchIcon,
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@material-ui/icons";

const SearchPage = () => {
  const location = useLocation();
  const term = location.pathname.split("/")[2];
  //   const { data } = useGoogleSearch(term);
  const data = Response;

  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img
            className="searchPageLogo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>
        <div className="searchPageHeaderBody">
          <Search hideButtons />
          <div className="searchPageOptions">
            <div className="searchPageOptionsLeft">
              <div className="searchPageOption">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPageOption">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPageOption">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPageOption">
                <LocalOffer />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPageOption">
                <Room />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPageOption">
                <Room />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPageOption">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPageOptionsRight">
              <div className="searchPageOption">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPageOption">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPageBody"></div>
    </div>
  );
};

export default SearchPage;
