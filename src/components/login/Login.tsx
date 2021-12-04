import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./login.module.css";

const Login = ({ isLoginPage }: { isLoginPage?: boolean }) => {
  return (
    <div
      className={styles.loginContainer}
      style={{
        marginTop: isLoginPage ? "20px" : "0",
      }}
    >
      <h1 className={styles.loginHeader}>Login to Discourse</h1>
      <LoginForm />
      <div className={styles.registerBtnContainer}>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
