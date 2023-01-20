import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <form onSubmit={submitHandler}>
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
                First Name <input type="text" required name="firstName" />
              </span>
              <span>
                Last Name <input type="text" name="lastName" />
              </span>
            </label>

            <label htmlFor="">
              Email
              <input type="email" required name="email" />
            </label>

            <label htmlFor="">
              Password
              <input type="password" required name="password" />
            </label>
            <button type="submit" className="btn crate-account-btn">
              Create Account
            </button>
            <small>
              Already have an account? <Link to="/login">Login here</Link>
            </small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
