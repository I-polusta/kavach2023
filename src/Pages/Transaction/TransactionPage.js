import React from "react";
import Header__Logged__in from "../../Components/Header/Header__Logged__in/Header__Logged__in";
import SidebarComp from "../../Components/Sidebar/SidebarComp";
import TransactionComp from "../../Components/TransactionComp/TransactionComp";

function TransactionPage() {
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
        <TransactionComp />
      </div>
    </div>
  );
}

export default TransactionPage;
