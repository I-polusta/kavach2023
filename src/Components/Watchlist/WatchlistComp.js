import React from "react";
import "./watchlist.css";
import { Button } from "@mui/material";
import WatchlistTable from "./WatchlistTable";
import { Link } from "react-router-dom";
function WatchlistComp() {
  return (
    <div className="watchComp__container">
      <div className="watchcont__header__body">
        <div className="Wcomp__heading">Watchlist</div>
        <div className="wcomp__button">
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#021e4e" }}
          >
            <Link to="/updateList" style={{ textDecoration: "none" }}>
              {" "}
              Create New
            </Link>
          </Button>
        </div>
      </div>
      <WatchlistTable />
    </div>
  );
}

export default WatchlistComp;
