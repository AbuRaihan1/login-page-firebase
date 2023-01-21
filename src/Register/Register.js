import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../firebase/firebase.init";
import "./Register.css";
const auth = getAuth(app);

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(firstName, lastName, email, password);

    // password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Use at least 1 letter uppercase");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      setError("Use at least one decimal number");
      return;
    }
    if (!/(?=.*[@$!%*#?&])/.test(password)) {
      setError("Use special keyword");
      return;
    }
    if (password.length < 6) {
      setError("Use minimum 6 character password");
      return;
    }
    setError("");

    // creating user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateDisplayName(firstName, lastName);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration Done",
        });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email Already in used");
        }
      });
  };

  // get name from input.
  const getFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const getLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  // add display name in
  const updateDisplayName = (firstName, lastName) => {
    updateProfile(auth.currentUser, {
      displayName: firstName + lastName,
    })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mobile-container">
      <div className="cam-area"></div>
      <div className="bottom-circle"></div>

      <form onSubmit={submitHandler}>
        <div className="signup-wrapper">
          <h2>Sign up</h2>
          <div className="info-area">
            <label htmlFor="" className="name-area">
              <span>
                {" "}
                First Name{" "}
                <input
                  type="text"
                  required
                  name="firstName"
                  onBlur={getFirstName}
                />
              </span>
              <span>
                Last Name{" "}
                <input
                  type="text"
                  name="lastName"
                  placeholder="optional"
                  onBlur={getLastName}
                />
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
            <p style={{ color: "red" }}>{error}</p>

            <div className="register-footer">
              <button type="submit" className="btn crate-account-btn">
                Create Account
              </button>
              <small>
                Already have an account? <Link to="/login">Login here</Link>
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
