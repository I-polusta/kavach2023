import React from "react";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import UpdateWatchListComp from "../../Components/Watchlist/UpdateWatchListComp";

function UpdateWatchlistPage() {
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
        <UpdateWatchListComp />
      </div>
    </div>
  );
}

export default UpdateWatchlistPage;
