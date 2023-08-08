import React from "react";
import "./transactionComp.css";
import CollapsibleTable from "../CollapsibleTable/CollapsibleTable";
function TransactionComp() {
  return (
    <div className="transactionComp__container">
      <div className="Tcomp__heading">Address found on Internet</div>
      <div>
        <CollapsibleTable />
      </div>
    </div>
  );
}

export default TransactionComp;
