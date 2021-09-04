import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <div
      style={{
        marginTop:"20px",
        padding: "15px",
        borderRadius: "15px",
        background: "#e5f1f4",
        borderBottom: "3px solid #294651",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "'Bebas Neue', cursive",
          textAlign: "center",
        }}
      >
        Create Account
      </h1>
      <RegistrationForm />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/login">Already have an account? Log in.</Link>
      </div>
    </div>
  );
};

export default Register;
