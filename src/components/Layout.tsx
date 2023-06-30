import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

import "./styles/layout.css";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Navbar />
        </div>
    );
};

export default Layout;
