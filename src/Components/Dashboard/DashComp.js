import React, { useState } from "react";
import "./dashcomp.css";
import { Button } from "@mui/material";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const baseURL =
  "http://10.20.7.109:8000/api/node/aa8d7407f88dca9b1779880c3d2e3245e02217f7366972d617f812c8dd73a96a/";

const url = "http://10.20.7.109:8000/api/geofencer/";
const alreadyurl = "http://10.20.7.109:8000/api/transaction/";
const ekaururl = "http://10.20.7.109:8000/api/watchlist/";
function DashComp() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [watchData, setWatchData] = useState([{}]);

  useEffect(() => {
    axios
      .get(alreadyurl + localStorage.getItem("key") + "/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setWatchData(data.id);
      });
  }, []);

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

  const handleAddToWatchlist = () => {
    axios
      .post(ekaururl, { transaction: data.id })
      .then((response) => {
        navigate("/watchlist");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.status);
        if (error.response.status === 400) {
          toast.error("Key Already exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Wrong Key, Try again", {
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

        console.log(error);
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
            {localStorage.getItem("key")}
          </span>
        </div>
        <div>
          <Link
            to="https://metasleuth.io/result/btc/1bb5d1308f8b458287cab404da76b4231f24dbe555c576171f6d792c0000ca01"
            target="blank"
          >
            {" "}
            <Button
              variant="contained"
              style={{ backgroundColor: "#021e4e" }}
              size="large"
              onClick={handleVisualise}
            >
              Visualize
            </Button>
          </Link>
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
        <div className="dash__body__cont" style={{ width: "80%" }}>
          <div className="collapseContainer">
            <h1 className="cc__heading">Mixed Transactions:</h1>
            {data.mixed_transaction ? (
              <h1 className="cc__subheading">Yes</h1>
            ) : (
              <h1 className="cc__subheading">No </h1>
            )}
          </div>
          <div className="collapseContainer">
            <h1 className="cc__heading">Type of event:</h1>
            <h1 className="cc__subheading">{data.type}</h1>
          </div>
          <div className="collapseContainer">
            <h1 className="cc__heading">Sender Address:</h1>
            <h1 className="cc__subheading">{data.sender}</h1>
          </div>
          <div className="collapseContainer">
            <h1 className="cc__heading">Recipient Address:</h1>
            <h1 className="cc__subheading">{data.reciever_to}</h1>
          </div>{" "}
          <div className="collapseContainer" style={{ paddingBottom: "50px" }}>
            <h1 className="cc__heading">Time of Transaction:</h1>
            <h1 className="cc__subheading">{data.time}</h1>
          </div>
          <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "#021e4e", width: "200px" }}
              size="large"
              onClick={handleAddToWatchlist}
            >
              Add to Watchlist
            </Button>
          </div>
        </div>

        <div
          className="collapseContainer"
          style={{ justifyContent: "flex-end", width: "600px" }}
        >
          <img src={data.logo} style={{ width: "50%" }} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DashComp;
