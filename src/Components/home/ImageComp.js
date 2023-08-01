import React from "react";
import "./imagecomp.css";
import image from "../../assets/images/rbg.png";
function ImageComp() {
  return (
    <div className="image__container">
      <img src={image} className="image__right" />
    </div>
  );
}

export default ImageComp;
