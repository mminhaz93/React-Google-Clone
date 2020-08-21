import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";

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
        </div>
      </div>
      <div className="homepageBody"></div>
    </div>
  );
};

export default Homepage;
