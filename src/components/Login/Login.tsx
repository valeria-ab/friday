import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginTC } from "../../store/auth-reducer";
import { AppRootStateType } from "../../store/store";
import styles from "./Login.module.css";
//hjghgfftftfh
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector<AppRootStateType>(
    (state) => state.auth.isLoggedIn
  );

 

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      loginTC({
        email: email,
        password: password,
        rememberMe: false,
      })
    );
  };
  if (isLoggedIn) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      {/* {isLoggedIn ? console.log("ok") : console.log("false")} */}
      <h1>It-incubator</h1>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <ul className={styles.loginPage}>
          <li>
            <label>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              className={styles.fieldLong}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </li>
          <li>
            <label>
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              name="password"
              className={styles.fieldLong}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </li>

          <li>
            <input type="submit" value="Login" />
          </li>
        </ul>
      </form>
      <div>Don't have an account?</div>
      <div>
        <a href="">Sign Up</a>
      </div>
    </div>
  );
};
