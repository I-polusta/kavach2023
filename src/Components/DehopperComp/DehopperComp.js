import React from "react";
import "./dehopperComp.css";
import * as yup from "yup";
import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const validationSchema = yup.object({
  id: yup.string("Enter your key").required("key is required"),
});
const ekaururl = "http://10.20.7.109:8000/api/destination-address/";
function DehopperComp() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .get(ekaururl + values.id + "/")
        .then((response) => {
          setCheck(true);
          console.log(response);
          setData(response.data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const listItems = data.map((number) => <li>{number}</li>);
  return (
    <div className="dehopperComp__container">
      <div className="DEHcomp__heading" style={{ paddingBottom: "15px" }}>
        Dehopper
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="DemixerForm">
          <div
            style={{
              paddingBottom: "10px",
            }}
          >
            <FormLabel id="demo-radio-buttons-group-label">
              <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  paddingBottom: "10px",
                }}
              >
                {" "}
                Transaction id
              </span>
            </FormLabel>
            <TextField
              fullWidth
              id="id"
              placeholder="Transaction id"
              value={formik.values.id}
              onChange={formik.handleChange}
              error={formik.touched.id && Boolean(formik.errors.id)}
              helperText={formik.touched.id && formik.errors.id}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              fontSize="large"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>

      <br></br>
      {check && (
        <>
          <div style={{ fontSize: "22px" }}>Possible:</div>
          <ul style={{ fontSize: "18px" }}>{listItems}</ul>
        </>
      )}
    </div>
  );
}

export default DehopperComp;
