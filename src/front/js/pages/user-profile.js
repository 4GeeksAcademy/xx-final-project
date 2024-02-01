import React from "react";
import { ImportImage } from "../component/User-Profile/importImage";
import { ProfileBio } from "../component/User-Profile/profileBio";
import { FavActivities } from "../component/User-Profile/favActivities";
import { FavParks } from "../component/User-Profile/fetchParks";
import Background from "../../img/background-imgs/green-mountain.jpg"

import "../../styles/user-profile/user-profile.css"

export const UserProfilePage = () => {
  return (
    <div className="background">
      <div className="top-half">
        <div className="image">
          < ImportImage />
        </div>
        <div className="userinfo">
          < ProfileBio />
          < FavActivities />
        </div>
      </div>
      <div className="parkcards">
        < FavParks />
      </div>
    </div>
  )
}