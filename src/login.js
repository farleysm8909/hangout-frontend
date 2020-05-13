import React from 'react';
import './login.css';

//components (e.g., Login) return html structures
export function Login() {
    return (
        <div className="login-page">
            <div className="hangout-title">Hangout</div>
            <div className="login-container">
                <div className="login-title">Login</div>
                <div className="login-info">
                    <label for="username">Username:</label>
                    <input type="text" className="username"></input>
                    <label for="password">Password:</label>
                    <input type="text" className="password"></input>
                    <button type="submit" className="submit-button" value="login" onClick={() => Login.remove(login-container)}>Login</button>
                </div>
            </div>
        </div>
    );
}