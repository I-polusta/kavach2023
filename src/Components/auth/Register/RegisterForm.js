import React from "react";
import "./registerform.css";
import * as yup from "yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  fname: yup
    .string("Enter your First Name")
    .min(4, "Name should be of minimum 8 characters length")
    .required("Name is required")
});
function RegisterForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post("http://localhost:3000/auth/signup", {
          email:values.email,
          name:values.fname,
          password:values.password
        }).then((response) => {
          if (response.status === 200){
            navigate("/verify", {
              state: {
                email:values.email,
                name:values.fname,
                password:values.password
              }
            });
          }
        }).catch((error) => {
          toast.error("Try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        });
    },
  });

  return (
    <div className="HP__right__container">
      <div className="login__form__container">
        <h2 className="Form__heading">Hello👋</h2>
        <p className="Form__subheading">Let’s get you started!</p>
        <div>
          <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                id="fname"
                name="fname"
                label="Name"
                variant="outlined"
                value={formik.values.fname}
                onChange={formik.handleChange}
                error={formik.touched.fname && Boolean(formik.errors.fname)}
                helperText={formik.touched.fname && formik.errors.fname}
              />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
              style={{
                marginTop: "20px",
                height: "50px",
                background: "#021E4E",
                borderRadius: "8px",
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>

        <div className="fp__subheading__signup">
          <h5>
            Already have an account?
            <Link to="/">Log In</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
