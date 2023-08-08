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
import { Link, useNavigate } from "react-router-dom";
import { Key } from "@mui/icons-material";

const validationSchema = yup.object({
  key: yup.string("Enter your key").required("Email is required"),
});
function SearchKeyComp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      key: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/dashboard");
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
                fullWidth
                margin="normal"
                id="key"
                placeholder="enter key"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ height: "30px", width: "30px" }}
                    >
                      <Key />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ height: "50px", width: "100px" }}
                    >
                      <Button
                        variant="text"
                        size="large"
                        style={{ color: "white" }}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                }}
                value={formik.values.key}
                onChange={formik.handleChange}
                error={formik.touched.key && Boolean(formik.errors.key)}
                helperText={formik.touched.key && formik.errors.key}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchKeyComp;
