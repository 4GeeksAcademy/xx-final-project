import React from "react";
import { ImportImage } from "../component/User-Profile/importImage";
import { ProfileBio } from "../component/User-Profile/profileBio";
import { FavActivities } from "../component/User-Profile/favActivities";
import { AttractionCard } from "../component/User-Profile/attractionCard";
import Background from "../../img/background-imgs/green-mountain.jpg"

export const UserProfilePage = () => {
  return (
    <div style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        < ImportImage />
        <div>
        < ProfileBio />
        < FavActivities />
        </div>
      </div>
      < AttractionCard />
    </div>
  )
}