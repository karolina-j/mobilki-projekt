import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <div className="nav-logo nav-home-logo"></div>
                    </Link>
                </li>
                <li>
                    <Link to="/chuck">
                        <div className="nav-logo nav-chuck-logo"></div>
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                        <div className="nav-logo nav-account-logo"></div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
