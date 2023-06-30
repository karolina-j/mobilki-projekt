import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles/header.css";

import logo from "../images/logo.png";

function Header() {
    return (
        <div className="header">
            <img className="logo-header" src={logo} />
            <div className="header-name"> Just Kiddin' </div>
        </div>
    );
}

export default Header;
