import React from "react";
import "./watchlistPage.css";
import WatchlistComp from "../../Components/Watchlist/WatchlistComp";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
function WatchlistPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#01060e",
      }}
    >
      <div>
        <Header__Logged__in />
      </div>
      <div style={{ display: "flex" }}>
        <SidebarComp />

        <WatchlistComp />
      </div>
    </div>
  );
}

export default WatchlistPage;
