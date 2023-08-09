import React from "react";
import "./registerform.css";
import * as yup from "yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const validationSchema = yup.object({
  otp: yup
    .string("Enter OTP")
    .required("OTP is required")
});
function OTPForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.get(`http://10.20.7.109:8000/api/totp/login/${values.otp}/`)
      .then((response) => {
          if (response.status===200){
            navigate("/searchkey");
          }
        }).catch((error) => {
          toast.error("wrong otp", {
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
        <p className="Form__subheading">Verify Your Account</p>
        <div>
          <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                id="otp"
                name="otp"
                label="OTP"
                variant="outlined"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
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
              Submit
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

export default OTPForm;
