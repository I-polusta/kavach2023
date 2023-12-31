import React from "react";
import "./authpage.css";
import Header__Logged__out from "../../Components/Header/Header__Logged__out/Header__Logged__out";
import ImageComp from "../../Components/home/ImageComp";
import RegisterForm from "../../Components/auth/Register/RegisterForm";
function RegisterPage() {
  return (
    <div className="authPage__Container__primary">
      <Header__Logged__out />
      <div className="auth__body__container">
        <RegisterForm />
        <ImageComp />
      </div>
    </div>
  );
}

export default RegisterPage;
