import React from "react";
import * as yup from "yup";
import "./searchkey.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  key: yup.string("Enter your key").required("Email is required"),
});
function SearchKeyComp() {
  const formik = useFormik({
    initialValues: {
      key: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="HP__right__container">
      <div className="login__form__container">
        <h2 className="Form__heading" style={{ fontSize: "38px" }}>
          The General Multi-Crypto Blockchain Explorer
        </h2>
        <p className="Form__subheading" style={{ marginTop: "64px" }}>
          Explore data on 120+ blockchains
        </p>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="searchInput">
              <TextField
                sx={{ mb: 1, color: "white", height: "58px" }}
                fullWidth
                margin="normal"
                id="email"
                label="Enter Key"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
                value={formik.values.key}
                onChange={formik.handleChange}
                error={formik.touched.key && Boolean(formik.errors.key)}
                helperText={formik.touched.key && formik.errors.key}
              />

              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                style={{
                  background: "#021E4E",
                  borderRadius: "8px",
                  height: "58px",
                }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchKeyComp;
