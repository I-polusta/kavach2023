import React from "react";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import DemixerComp from "../../Components/Demixer/DemixerComp";

function DemixerPage() {
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
        <DemixerComp />
      </div>
    </div>
  );
}

export default DemixerPage;
