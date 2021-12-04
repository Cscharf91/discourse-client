import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import styles from "./login.module.css";

const Register = () => {
  return (
    <div
      className={styles.loginContainer}
      style={{
        marginTop: "20px",
      }}
    >
      <h1 className={styles.loginHeader}>Create Account</h1>
      <RegistrationForm />
      <div className={styles.registerBtnContainer}>
        <Link to="/login">Already have an account? Log in.</Link>
      </div>
    </div>
  );
};

export default Register;
