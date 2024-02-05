import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const Home = (id) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div>
        <h1>Parks</h1>
        <div className="">
          {store.parkList?.map((park, index) => {
            return (
              <div className="">
                <Card>
                {park.fullName}
                <Link to={"/parkprofilepage/" + park.id}>
                  <button className="btn btn-primary" style={{ margin: "5px" }}>
                    Learn More
                  </button>
                </Link>
                <button
                  className="btn btn-primary"
                  onClick={() => actions.addFavorite(id)}
                  style={{ margin: "5px" }}
                >
                  Heart Symbol
                </button>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
