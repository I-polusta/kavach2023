import React, { useState } from "react";
import "./demixerComp.css";
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

const validationSchema = yup.object({
  id: yup.string("Enter your key").required("key is required"),
  // type: yup
  //   .boolean()
  //   .required("Selecting the gender field is required")
  //   .oneOf([0, 1]),
});
const baseURL =
  "http://10.20.7.109:8000/api/node/aa8d7407f88dca9b1779880c3d2e3245e02217f7366972d617f812c8dd73a96a/";

const ekaururl = "http://10.20.7.109:8000/api/demixer/";
function DemixerComp() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: "",
      type: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .get(ekaururl)
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
  const [currency, setCurrency] = React.useState("");
  const [open, setOpen] = useState("");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleVisualise = () => {
    setOpen(true);
    axios
      .get(baseURL)
      .then((response) => {
        setOpen(false);
        window.open(response.data.link, "_blank");
        console.log(response.data.link);
      })
      .catch((error) => {
        setOpen(false);
      });
  };

  const listItems = data.map((number) => <li>{number}</li>);

  return (
    <div className="DemixerComp__container">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div
        className="ddash__header__container"
        style={{ paddingBottom: "10px" }}
      >
        <div className="Decomp__heading">Demixer</div>
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#021e4e" }}
            size="large"
            onClick={handleVisualise}
          >
            Visualize
          </Button>
        </div>
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
                Search Type
              </span>
            </FormLabel>

            <RadioGroup defaultValue="Input" name="radio-buttons-group">
              <FormControlLabel
                id="type"
                value="input"
                control={<Radio />}
                label="Use as Input Transaction"
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              />
              <FormControlLabel
                id="type"
                value="output"
                control={<Radio />}
                label="Use as Output Transaction"
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              />
            </RadioGroup>
          </div>
          {/* <div>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={handleChange}
              defaultValue="Bitcoin"
            >
              <MenuItem value="Bitcoin">Bitcoin</MenuItem>
            </Select>
          </div> */}
        </div>
        <div>
          <Button type="submit" variant="contained" fullWidth fontSize="large">
            Submit
          </Button>
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

export default DemixerComp;
