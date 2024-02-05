import React from "react";
import { ImportImage } from "../component/User-Profile/importImage";
import { ProfileBio } from "../component/User-Profile/profileBio";
import { FavActivities } from "../component/User-Profile/favActivities";
import { FavParks } from "../component/User-Profile/favParks";

import "../../styles/user-profile/user-profile.css";

export const UserProfilePage = () => {
  return (
    <div className="background">
      <div className="grid">
        <div className="image">
          <ImportImage />
        </div>
        <div className="userinfo">
          <div className="bio">
            <ProfileBio />
          </div>
          <div className="activity">
            <FavActivities />
          </div>
        </div>
      </div>
      <div className="parkcards">
        <FavParks />
      </div>
    </div>
  );
};
