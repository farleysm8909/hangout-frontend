import React from 'react';
import './App.css';
import './login.css'; 

//components (e.g., Login) return html structures
export function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-title">Login</div>
                <div className="login-info">
                    <label for="username">Username:</label>
                    <input type="text" className="user-input"></input>
                    <label for="password">Password:</label>
                    <input type="text" className="user-input"></input>
                    <button type="submit" className="submit-button" value="login" /*onClick={() => Login.remove(login-container)}*/>Login</button>
                </div>
            </div>
            <div className="vLine"></div>
            <div className="account-container">
                <div className="account-title">Create New Account</div>
                <div className="login-info">
                        <label for="firstname">First Name:</label>
                        <input type="text" className="user-input"></input>
                        <label for="lastname">Last Name:</label>
                        <input type="text" className="user-input"></input>
                        <label for="username">Username:</label>
                        <input type="text" className="user-input"></input>
                        <label for="password">Password:</label>
                        <input type="text" className="user-input"></input>
                    <button type="submit" className="submit-button" value="Create New Account" /*onClick={() => Login.remove(login-container)}*/>Create Account</button>
                </div>
            </div>
        </div>
    );
}