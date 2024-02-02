import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div>
        <h1>Parks</h1>
        <div className="">
          {store.parkList?.map((park, index) => {
            return (
              <div className="">
                {park.fullName}
                <Link to={"/parkprofilepage/" + park.id}>
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
