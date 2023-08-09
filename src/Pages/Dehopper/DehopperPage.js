import React from "react";
import "./dehopperpage.css";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import DehopperComp from "../../Components/DehopperComp/DehopperComp";
function DehopperPage() {
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
        <DehopperComp />    
      </div>
    </div>
  );
}

export default DehopperPage;
