import React from "react";
import SearchKeyComp from "../../Components/SearchKey/SearchKeyComp";
import ImageComp from "../../Components/home/ImageComp";
import Header__Logged__out from "../../Components/Header/Header__Logged__out/Header__Logged__out";

function SearchKeyPage() {
  return (
    <div className="authPage__Container__primary">
      <Header__Logged__out />
      <div className="auth__body__container">
        <SearchKeyComp />
        <ImageComp />
      </div>
    </div>
  );
}

export default SearchKeyPage;
