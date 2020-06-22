import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <img className="droid_nav" alt="android" src="img/Droid.png" />
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/">About</Link>
          </li>
          <li>
          <Link to="/Products">Features</Link>
          </li>
          <li>
          <Link to="/">Pricing</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
