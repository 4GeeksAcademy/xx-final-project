import React from "react";
import "../../../styles/user-profile/profileBio.css"

export const ProfileBio = () => {
  return (
    <div className="frame">
      <div className="frame-wrapper">
        <div className="div">
          <div className="text-wrapper-2">First Last</div>
          <div className="text-wrapper-3">State</div>
          <div className="text-wrapper-4">Get to know me:</div>
          <div className="text-wrapper-5">Type something here</div>
          <div className="text-wrapper-6">Favorite activities:</div>
          <div className="div-wrapper">
            <div className="div-2">
              <img className="icon-park-outline" alt="Icon park outline" src="icon-park-outline-add.svg" />
              {/* <NormalText divClassName="normal-text-instance" text="Add" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};