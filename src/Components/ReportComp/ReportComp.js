import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./reportcomp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const validationSchema = yup.object({
  address: yup
    .string("Enter your crypto address")
    .required("Email is required"),
  coin: yup.string("Enter your coin").required("enter the type of coin"),
  number: yup
    .number("Enter your Complaint number")
    .min(8, "Number should be of minimum 3 characters length")
    .required("Complaint number is required"),
  info: yup.string("Enter your information").required("info is required"),
});

const ekaururl = "http://10.20.7.109:8000/api/report/";

function ReportComp() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    axios
      .get(ekaururl)
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [check]);

  const formik = useFormik({
    initialValues: {
      address: "",
      coin: "",
      number: "",
      info: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(ekaururl, {
          address: values.address,
          coin: values.coin,
          number: values.number,
          information: values.info,
        })
        .then((response) => {
          resetForm({ values: "" });
          setCheck(!check);
          toast.success("Complaint Submitted", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <div className="watchComp__container">
      <div className="watchcont__header__body">
        <div className="Wcomp__heading">
          Register your Complaint
          <form onSubmit={formik.handleSubmit}>
            <div className="RegForm__input__container">
              <TextField
                fullWidth
                margin="normal"
                id="address"
                name="address"
                placeholder="enter crypto address"
                variant="outlined"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
            <TextField
              fullWidth
              margin="normal"
              id="coin"
              name="coin"
              placeholder="Enter crypto coin"
              variant="outlined"
              value={formik.values.coin}
              onChange={formik.handleChange}
              error={formik.touched.coin && Boolean(formik.errors.coin)}
              helperText={formik.touched.coin && formik.errors.coin}
            />

            <TextField
              fullWidth
              margin="normal"
              id="number"
              name="number"
              placeholder="Enter Complaint number"
              variant="outlined"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <TextField
              fullWidth
              margin="normal"
              id="info"
              name="info"
              placeholder="Enter Complaint details"
              variant="outlined"
              value={formik.values.info}
              onChange={formik.handleChange}
              error={formik.touched.info && Boolean(formik.errors.info)}
              helperText={formik.touched.info && formik.errors.info}
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
              File Complaint
            </Button>
          </form>
        </div>
      </div>

      <div>
        <div className="Wcomp__heading">All Complaints:</div>
        <div>
          {" "}
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, background: "#020a18" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell align="right">Coin</TableCell>
                  <TableCell align="right">Complaint Number</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.address}
                    </TableCell>
                    <TableCell align="right">{row.coin}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right">{row.information}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ReportComp;
