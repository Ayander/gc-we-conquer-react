import React from "react";
import WebLogo from "../assets/Images/Wee Conquer gif.gif"

const Header = () => {
    return (
        <header>
            <nav>
                <a href="index.html" className="nav-logo">
                    <img src={WebLogo} alt="logo"/>
                </a>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <a href="index.html">Home</a>
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