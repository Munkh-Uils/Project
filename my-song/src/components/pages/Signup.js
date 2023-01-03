import styles from "../styles/Signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ThemeContext } from "../contexts/ThemeProvider";
import React, { useState, useContext } from "react";
import { auth } from "../config";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.signup}>
          <h1 className={styles.text}>Sign up</h1>
          <form>
            <div>
              <label className={styles.emtext} htmlFor="email-address">
                Email address or username
              </label>
              <input
                className={styles.email}
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address or username"
              />
            </div>
            <div>
              <label className={styles.patext} htmlFor="password">
                Password
              </label>
              <input
                className={styles.pass}
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <a className={styles.forgot}>Forgot your password?</a>
            <div className={styles.rem}>
              <div className={styles.remember}>
                <input className={styles.check} type="checkbox" />
                Remember me
              </div>
              <button
                className={styles.button}
                type="submit"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
            <div
              style={{
                width: "450px",
                border: "0.5px solid grey",
                marginTop: "25px",
              }}
            ></div>
          </form>

          <p className={styles.nuguuduh}>
            Already have an account?<NavLink className={styles.switch} to="/login">Sign in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
