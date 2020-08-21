import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

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
      <div className="homepageBody"></div>
    </div>
  );
};

export default Homepage;
