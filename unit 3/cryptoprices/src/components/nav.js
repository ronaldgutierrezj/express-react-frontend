import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>THE CRYPTO PRICE APP</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};

export default Nav;