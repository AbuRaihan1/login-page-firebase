import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../firebase/firebase.init";
import useFirebase from "../Hook/useFirebase";
import "./Login.css";

const auth = getAuth(app);
const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { handleGoogleLogin, handleFacebookLogin, handleGithubLogin } =
    useFirebase();
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
        });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("oops!", "Email or password wrong!", "error");
      });
  };

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("reset password sent in your mail");
      })
      .catch((error) => {
        console.log(error.message);
        if (!email) {
          Swal.fire("oops!", "Please Enter your email", "error");
        }
        setError(error.message);
      });
  };

  const getEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <div className="signup-wrapper">
        <form onSubmit={loginHandler}>
          <h2> Welcome Back </h2>
          <div className="info-area">
            <label htmlFor="">
              Email
              <input type="email" required name="email" onBlur={getEmail} />
            </label>

            <label htmlFor="">
              Password
              <input type="password" required name="password" />
            </label>
            <p style={{ color: "red" }}>{error}</p>
            <div className="foterArea">
              <button className="btn crate-account-btn">Login</button>
              <small>
                Don't have a account?{" "}
                <Link
                  to="/register"
                  style={{ color: "#ff5200", cursor: "pointer" }}
                >
                  Sign Up
                </Link>
              </small>
              <span style={{ fontWeight: "bold", fontSize: "13px" }}>
                Forget password?{" "}
                <span
                  style={{ color: "#ff5200", cursor: "pointer" }}
                  onClick={handleForgetPassword}
                >
                  Reset here
                </span>
              </span>
            </div>

            <div>
              <div className="or">or</div>
            </div>
          </div>
        </form>
        <div className="signin-third-party">
          <button className="btn" onClick={handleGoogleLogin}>
            {" "}
            Google
          </button>
          <button className="btn" onClick={handleGithubLogin}>
            {" "}
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
