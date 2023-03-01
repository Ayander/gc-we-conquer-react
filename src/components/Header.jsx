import React from "react";
import WebLogo from "../assets/Images/Wee Conquer gif.gif"
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to={"/"} className="nav-logo">
                    <img src={WebLogo} alt="logo"/>
                </Link>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Link to= {"/"}>Home</Link>
                    </li>
                    <li className="menu-item">
                        <a href="About Us.html">About Us</a>
                    </li>
                    <li className="menu-item">
                        <Link to={"/ExternalWebsites/"}>External websites</Link>
                    </li>
                    <li className="menu-item">
                    <Link to={"/Contacts/"}>Contact Us</Link>
                    </li>
                    <li className="menu-item">
                        <a href="Donate.html">Donate</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header