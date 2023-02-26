import React from "react";
import WebLogo from "../assets/Images/Wee Conquer gif.gif"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="index.html" class="nav-logo">
                    <img src={WebLogo} alt="logo"/>
                </Link>
                <ul class="nav-menu">
                    <li class="menu-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="menu-item">
                        <a href="About Us.html">About Us</a>
                    </li>
                    <li class="menu-item">
                        <a href="externalWebsites.html">External websites</a>
                    </li>
                    <li class="menu-item">
                        <a href="Contacts.html">Contacts</a>
                    </li>
                    <li class="menu-item">
                        <a href="Donate.html">Donate</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header