import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../firebase/firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Congrats! you are loged in",
          showConfirmButton: true,
          timer: 1500,
        });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email, password);
  };

  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <form onSubmit={loginHandler}>
        <div className="signup-wrapper">
          <h2> Welcome Back </h2>
          <div className="info-area">
            <label htmlFor="">
              Email
              <input type="email" required name="email" />
            </label>

            <label htmlFor="">
              Password
              <input type="password" required name="password" />
            </label>
            <div className="foterArea">
              <button className="btn crate-account-btn">Login</button>
              <small>
                Don't have a account? <Link to="/register">Sign Up</Link>
              </small>
              <small style={{ color: "blue" }}>
                Forget password? <span>Reset here</span>
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
