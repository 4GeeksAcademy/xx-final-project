import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import comingSoon from "../../../img/comingSoon.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import Fav from "../../../img/Arianna's pngs/heart.png"
import FilledFav from "../../../img/Arianna's pngs/filledheart.png"
import "../../../styles/user-profile/regularCard.css"

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export const RegularCard = ({ data, deleteFavorites, text }) => {
  const { store, actions } = useContext(Context)
  const truncatedText = truncateText(data?.description, 10);
  const isFavorite = store.favorites.includes(data.id)

  return (
    <div className="park-card-container" style={{ width: '1340px' }}>
      <Card className="park-card" style={{ width: "18rem", margin: "30px", display: "inline-block" }}>
        <Card.Img
          className="park-card-image"
          variant="top"
          src={data.images[0].url}
          onError={(e) => {
            e.target.src = comingSoon;
          }}
        />
        <Card.Body className="park-card-body">
          <Card.Title className="park-card-title">{data.fullName}</Card.Title>
          <Card.Text className="park-card-text city-state">City, State: {data.addresses[0].city}, {data.addresses[0].stateCode}</Card.Text>
          <Card.Text className="park-card-text">
            {truncatedText}
          </Card.Text >
          <div className="buttons">
            <Link to={"/parkprofilepage/" + data.id}>
              <Button className="learnmore buttons" variant="primary" style={{ margin: "5px" }}>
                Learn More!
              </Button>
            </Link>
            <Button
              className="heart-btn buttons"
              variant="primary"
              onClick={() => deleteFavorites(data.id)}>
              {isFavorite ? <img src={FilledFav} alt="Heart" /> : <img src={Fav} alt="Heart" />}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
