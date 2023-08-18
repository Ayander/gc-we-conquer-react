// Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import WebLogo from "../assets/Images/Weee Conquer.gif";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"} className="nav-logo">
          <img src={WebLogo} alt="logo" />
        </Link>
        <ul className="nav-menu">
          <li className="menu-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="menu-item">
            <Link to={"/ExternalWebsites/"}>External Websites</Link>
          </li>
          <li className="menu-item">
            <Link to={"/Contacts/"}>Contact Us</Link>
          </li>
          <li className="menu-item">
          <Link to={"/Donate/"}>Donate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
