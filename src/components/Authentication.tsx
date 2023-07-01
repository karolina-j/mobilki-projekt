import React, { useState, useContext } from "react";
import { auth } from "../firebaseSetup";
import { AuthContext } from "../context/AuthContext";

import "./styles/authPage.css";

const Authentication = () => {
    const user = useContext(AuthContext);

    const [userEmail, setUserEmail] = useState("");

    const [userPassword, setUserPassword] = useState("");

    const handleEmailChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    };

    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(userEmail, userPassword);
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(userEmail, userPassword);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        await auth.signOut();
    };

    return (
        <>
            {!user ? (
                <div className="GetCredentials">
                    <div className="no-user-text">
                        Sign up and laugh with us!
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        className="SignIn-email"
                        value={userEmail}
                        onChange={handleEmailChange}
                        name="userEmail"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="SignIn-password"
                        value={userPassword}
                        onChange={handlePasswordChange}
                        name="userPassword"
                    />

                    <div className="buttons">
                        <button className="SingIn-btn" onClick={signIn}>
                            Sign In
                        </button>

                        <button className="SingUp-btn" onClick={createAccount}>
                            Sign Up
                        </button>
                    </div>
                </div>
            ) : (
                <div className="GetCredentials">
                    <div className="welcome-msg">
                        <p>Welcome</p>
                        <span className="user-mail"> {user.email} </span>
                    </div>
                    <button className="LogOut-btn" onClick={signOut}>
                        Log Out
                    </button>
                </div>
            )}
        </>
    );
};

export default Authentication;

/*
            <div className="SignOut-container">
                {user && <button onClick={signOut}>Sign Out</button>}
            </div>
*/
