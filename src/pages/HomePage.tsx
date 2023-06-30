import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../components/styles/homePage.css";
import chuckLogo from "../images/chuckLogo.png";
import logo from "../images/logo.png";

function HomePage() {
    return (
        <div className="home-container">
            <div className="home-welcome">
                <img className="logo-image" src={logo} />
                <div className="welcome-text">
                    <div>Looking for a quick laugh?</div>
                    <div className="answer">We got you!</div>
                </div>
            </div>

            <hr />
            <div className="home-choice">
                <div className="choice-text"> What are you looking for? </div>

                <div className="home-chuck">
                    <Link to="/chuck">
                        <img className="chuck-logo" src={chuckLogo} />
                    </Link>
                    <div className="chuck-undertext">
                        <i>Chuck Norris joke generator</i>
                    </div>
                </div>
            </div>
            <hr />

            <div className="home-signUp">
                <div className="signUp-text">
                    <div className="signup-question">
                        Interested in more features?{" "}
                    </div>
                    <div className="signup-answer">
                        All you have to do is sign up!
                    </div>
                </div>

                <Link to="/account">
                    <button className="login-redirect"> Sign up </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
