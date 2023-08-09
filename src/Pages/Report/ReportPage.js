import React from "react";
import "./reportpage.css";
import ReportComp from "../../Components/ReportComp/ReportComp";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
function ReportPage() {
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

        <ReportComp />
      </div>
    </div>
  );
}

export default ReportPage;
