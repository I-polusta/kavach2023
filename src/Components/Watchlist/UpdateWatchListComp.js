import React from "react";
import "./watchlist.css";
import { Button } from "@mui/material";
import WatchlistTable from "./WatchlistTable";
import { Link } from "react-router-dom";
function UpdateWatchListComp() {
  return (
    <div className="watchComp__container">
      <div className="watchcont__header__body">
        <div className="Wcomp__heading">
          Update Watchlist: 65654546598879845649879465465665
        </div>
        <div className="wcomp__button">
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#021e4e" }}
          >
            <Link to="/updateList" style={{ textDecoration: "none" }}>
              {" "}
              Update
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateWatchListComp;
