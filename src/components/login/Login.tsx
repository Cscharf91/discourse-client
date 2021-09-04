import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = ({ isLoginPage }: { isLoginPage?: boolean }) => {
  return (
    <div
      style={{
        marginTop: isLoginPage ? "20px" : "0",
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
        Login to Discourse
      </h1>
      <LoginForm />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
