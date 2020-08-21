import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Search from "../../components/search/Search";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepageHeader">
        <div className="homepageHeaderLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homepageHeaderRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4" />
        </div>
      </div>
      <div className="homepageBody">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="homepageInputContainer">
          <Search className="homepageSearchIcon"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
