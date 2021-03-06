import React from 'react'; //I know we need useState (took out for moment) to store user variables (e.g., username/password) but I haven't figured out how to do this
import './App.css';
import './login.css'; 

//components (e.g., Login) return html structures
//ran into server issues so we weren't able to figure out how to connect this component to the database (buttons don't function)
export function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-title">Login</div>
                <div className="login-info">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="user-input"></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="user-input"></input>
                    <button type="submit" className="submit-button" value="login" /*onClick={}*/>Login</button>
                </div>
            </div>
            <div className="vLine"></div>
            <div className="account-container">
                <div className="account-title">Create New Account</div>
                <div className="login-info">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" className="user-input"></input>
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" className="user-input"></input>
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="user-input"></input>
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="user-input"></input>
                    <button type="submit" className="submit-button" value="Create New Account" /*onClick={}*/>Create Account</button>
                </div>
            </div>
        </div>
    );
}
