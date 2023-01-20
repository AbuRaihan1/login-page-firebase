import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <div className="signup-wrapper">
        <h2>
          Sign up <span>with,</span>
        </h2>
        <div className="signin-third-party">
          <button className="btn"> github</button>
          <button className="btn"> Facebook</button>
        </div>

        <div className="or">or</div>
        <div className="info-area">
          <label htmlFor="" className="name-area">
            <span>
              {" "}
              First Name <input type="text" required />
            </span>
            <span>
              Last Name <input type="text" />
            </span>
          </label>

          <label htmlFor="">
            Email
            <input type="email" required />
          </label>

          <label htmlFor="">
            Password
            <input type="password" required />
          </label>
          <button className="btn crate-account-btn">Create Account</button>
          <small>
            Already have an account? <Link to='/login'>Login here</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
