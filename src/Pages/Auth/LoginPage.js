import React from "react";
import "./authpage.css";
import Header__Logged__out from "../../Components/Header/Header__Logged__out/Header__Logged__out";
import LoginForm from "../../Components/auth/Login/LoginForm";
import ImageComp from "../../Components/home/ImageComp";
function LoginPage() {
  return (
    <div className="authPage__Container__primary">
      <Header__Logged__out />
      <div className="auth__body__container">
        <LoginForm />
        <ImageComp />
      </div>
    </div>
  );
}

export default LoginPage;
