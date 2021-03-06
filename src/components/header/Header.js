import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/streams2-client" className="item">
        StreamSling
      </Link>
      <div className="right menu">
        <Link to="/streams2-client" className="item">
          All Streams
        </Link>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
