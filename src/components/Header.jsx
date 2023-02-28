import React from "react";
import WebLogo from "../assets/Images/Wee Conquer gif.gif"
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to={"/Home"} className="nav-logo">
                    <img src={WebLogo} alt="logo"/>
                </Link>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Link {"../pages/Home"}>Home</Link>
                    </li>
                    <li className="menu-item">
                        <a href="About Us.html">About Us</a>
                    </li>
                    <li className="menu-item">
                        <a href="externalWebsites.html">External websites</a>
                    </li>
                    <li className="menu-item">
                        <a href="Contacts.html">Contacts</a>
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