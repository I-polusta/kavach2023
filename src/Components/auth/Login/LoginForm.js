import React from "react";
import "./loginform.css";
import * as yup from "yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (
        values.email === "admin@gmail.com" &&
        values.password === "12345678"
      ) {
        toast.success("User Logged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/otp");
      } else {
        toast.error("Wrong Credentials, Try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div className="HP__right__container">
      <div className="login__form__container">
        <h2 className="Form__heading">Hello👋</h2>
        <p className="Form__subheading">Let’s get you started!</p>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ padding: "10px 0px" }}>
              <TextField
                sx={{ mb: 1, color: "white" }}
                fullWidth
                margin="normal"
                id="email"
                name="email"
                placeholder="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{ mb: 1 }}
                fullWidth
                margin="normal"
                id="password"
                name="password"
                placeholder="password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
              style={{
                height: "50px",
                background: "#021E4E",
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </form>
        </div>
        <div className="fp__subheading">
          <h5>Forgot Password?</h5>
        </div>
        <div className="fp__subheading__signup">
          <h5>
            Don't have an account?
            <Link to="/register">Sign Up</Link>
          </h5>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
