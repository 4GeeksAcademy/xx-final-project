import React from "react";
import { ImportImage } from "../component/User-Profile/importImage";
import { ProfileBio } from "../component/User-Profile/profileBio";
import { FavActivities } from "../component/User-Profile/favActivities";

export const UserProfilePage = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        < ImportImage />
        <div>
        < ProfileBio />
        < FavActivities />
        </div>
      </div>
    </div>
  )
}