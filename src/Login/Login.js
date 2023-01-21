import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <div className="signup-wrapper">
        <h2> Welcome Back </h2>
        <div className="info-area">
          <label htmlFor="">
            Email
            <input type="email" required />
          </label>

          <label htmlFor="">
            Password
            <input type="password" required />
          </label>
          <div className="foterArea">
            <button className="btn crate-account-btn">Login</button>
            <small>
              Don't have a account? <Link to="/register">Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
