import React, { useEffect, useState } from "react";
import "./sidebar.css";
import {
  BookmarkOutlined,
  DashboardOutlined,
  PaidOutlined,
  Tune,
  TuneOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function SidebarComp() {
  console.log(window.location.pathname);
  const [path, setPath] = useState(window.location.pathname);
  const [dashactive, setDashactive] = useState(false);
  const [transactive, setTransactive] = useState(false);
  const [watchactive, setWatchactive] = useState(false);
  const [mixactive, setMixactive] = useState(false);
  const [dehopactive, setDehopactive] = useState(false);
  useEffect(() => {
    if (path === "/dashboard") setDashactive(true);
    if (path === "/transaction") setTransactive(true);
    if (path === "/watchlist") setWatchactive(true);
    if (path === "/demixer") setMixactive(true);
    if (path === "/dehopper") setDehopactive(true);
  }, []);

  return (
    <div className="sidebar__container">
      {dashactive ? (
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className="sidebar__list__active">
            <DashboardOutlined style={{ padding: "10px" }} /> Dashboard
          </div>
        </Link>
      ) : (
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className="sidebar__list">
            <DashboardOutlined style={{ padding: "10px" }} /> Dashboard
          </div>
        </Link>
      )}

      {transactive ? (
        <Link to="/transaction" style={{ textDecoration: "none" }}>
          <div className="sidebar__list__active">
            <PaidOutlined style={{ padding: "10px" }} /> Web Scrapper
          </div>
        </Link>
      ) : (
        <Link to="/transaction" style={{ textDecoration: "none" }}>
          <div className="sidebar__list">
            <PaidOutlined style={{ padding: "10px" }} /> Web Scrapper
          </div>
        </Link>
      )}

      {watchactive ? (
        <Link to="/watchlist" style={{ textDecoration: "none" }}>
          <div className="sidebar__list__active">
            <BookmarkOutlined style={{ padding: "10px" }} />
            Watchlist{" "}
          </div>
        </Link>
      ) : (
        <Link to="/watchlist" style={{ textDecoration: "none" }}>
          <div className="sidebar__list">
            {" "}
            <BookmarkOutlined style={{ padding: "10px" }} />
            Watchlist
          </div>
        </Link>
      )}

      {mixactive ? (
        <Link to="/demixer" style={{ textDecoration: "none" }}>
          <div className="sidebar__list__active">
            <TuneOutlined style={{ padding: "10px" }} />
            Demixer
          </div>
        </Link>
      ) : (
        <Link to="/demixer" style={{ textDecoration: "none" }}>
          <div className="sidebar__list">
            {" "}
            <TuneOutlined style={{ padding: "10px" }} />
            Demixer
          </div>
        </Link>
      )}
      {dehopactive ? (
        <Link to="/dehopper" style={{ textDecoration: "none" }}>
          <div className="sidebar__list__active">
            <TuneOutlined style={{ padding: "10px" }} />
            Dehopper
          </div>
        </Link>
      ) : (
        <Link to="/dehopper" style={{ textDecoration: "none" }}>
          <div className="sidebar__list">
            {" "}
            <TuneOutlined style={{ padding: "10px" }} />
            Dehopper
          </div>
        </Link>
      )}
    </div>
  );
}

export default SidebarComp;
