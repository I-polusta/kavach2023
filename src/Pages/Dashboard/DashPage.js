import React from "react";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import DashComp from "../../Components/Dashboard/DashComp";

function DashPage() {
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
        <DashComp />
      </div>
    </div>
  );
}

export default DashPage;
