import React from "react";
import "../../../styles/user-profile/importImage.css"
import uploadBtn from "../../../img/upload.svg"

export const ImportImage = () => {
  return (
    <div className="box">
      <button>{uploadBtn}</button> <br />
      Add Photo
    </div>
  );
};