import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        StreamerDoodleDingDong
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>

        <Link to="/streams/show" className="item">
          Login -- change link
        </Link>
      </div>
    </div>
  );
};

export default Header;
