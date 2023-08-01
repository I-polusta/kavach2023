import React from "react";
import "./registerform.css";
import * as yup from "yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  cnfpassword: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  fname: yup
    .string("Enter your First Name")
    .min(4, "Name should be of minimum 8 characters length")
    .required("Name is required"),
  lname: yup
    .string("Enter your Last Name")
    .min(8, "Name should be of minimum 8 characters length")
    .required("Name is required"),
});
function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      cnfpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="HP__right__container">
      <div className="login__form__container">
        <h2 className="Form__heading">Hello👋</h2>
        <p className="Form__subheading">Let’s get you started!</p>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="RegForm__input__container">
              <TextField
                margin="normal"
                id="fname"
                name="fname"
                label="First Name"
                variant="outlined"
                value={formik.values.fname}
                onChange={formik.handleChange}
                error={formik.touched.fname && Boolean(formik.errors.fname)}
                helperText={formik.touched.fname && formik.errors.fname}
              />{" "}
              <TextField
                margin="normal"
                id="lname"
                name="lname"
                label="Last Name"
                variant="outlined"
                value={formik.values.lname}
                onChange={formik.handleChange}
                error={formik.touched.lname && Boolean(formik.errors.lname)}
                helperText={formik.touched.lname && formik.errors.lname}
              />
            </div>
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
            <TextField
              fullWidth
              margin="normal"
              id="cnfpassword"
              name="cnfpassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={formik.values.cnfpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.cnfpassword && Boolean(formik.errors.cnfpassword)
              }
              helperText={
                formik.touched.cnfpassword && formik.errors.cnfpassword
              }
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
