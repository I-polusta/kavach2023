import React, { useState } from "react";
import "./dashcomp.css";
import { Button } from "@mui/material";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const baseURL =
  "http://192.168.27.88:8000/api/node/aa8d7407f88dca9b1779880c3d2e3245e02217f7366972d617f812c8dd73a96a/";

const url = "http://192.168.27.88:8000/api/geofencer/";

function DashComp() {
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
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

  const handleGeofence = () => {
    setOpen(true);
    axios
      .get(url)
      .then((response) => {
        setOpen(false);
        console.log(response.data.url);
        window.open(response.data.url, "_blank");
      })
      .catch((error) => {
        setOpen(false);
      });
  };

  return (
    <div className="dashboard__container">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="dash__header__container">
        <div className="Dcomp__heading" style={{ fontSize: "26px" }}>
          Address 1: {""}
          <span style={{ fontSize: "26px" }}>
            aa8d7407f88dca9b1779880c3d2e3245e02217f7366972d617f812c8dd73a96a
          </span>
        </div>
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
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#021e4e" }}
            size="large"
            onClick={handleGeofence}
          >
            Geo Fencer
          </Button>
        </div>
      </div>
      <div className="dash__body" style={{ padding: "36px" }}>
        <div>
          <div className="dash__body__cont">
            <div style={{ padding: "10px" }}>
              <h2>Type of Event:</h2>
            </div>
            <div style={{ padding: "10px" }}>
              <h4>123489091619869</h4>
            </div>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#021e4e" }}
            size="large"
          >
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DashComp;
