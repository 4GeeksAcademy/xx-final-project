import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import comingSoon from "../../../img/comingSoon.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Fav from "../../../img/Arianna's pngs/heart.png"
import FilledFav from "../../../img/Arianna's pngs/filledheart.png"

export const RegularCard = ({data, deleteFavorites}) => {
  const {store, actions} = useContext(Context)
  const isFavorite = store.favorites.includes(data.id)

  return (
    <Card style={{ width: "18rem", margin: "30px", display: "inline-block" }}>
      <Card.Img
        variant="top"
        src={data.images[0].url}
        onError={(e) => {
          e.target.src = comingSoon;
        }}
      />
      <Card.Body>
        <Card.Title>{data.fullName}</Card.Title>
        <Card.Text>
          {data.description} <br />
          {data.addresses[0].city}, {data.addresses[0].stateCode}
        </Card.Text>
        {/* <Link to={"/parkprofilepage/" + park.id}  state={{ type: data.type, index: data.id }}> */}
        <Link to={"/parkprofilepage/" + data.id}>
          <Button variant="primary" style={{ margin: "5px" }}>
            Learn More!
          </Button>
        </Link>
          <Button 
            variant="primary"
            onClick={() => deleteFavorites(data.id)}>
            {isFavorite ? <img src={FilledFav} alt="Heart" /> : <img src={Fav} alt="Heart" /> }
          </Button>
      </Card.Body>
    </Card>
  );
};
