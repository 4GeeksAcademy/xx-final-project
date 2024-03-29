import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heart from "../../../img/Arianna's pngs/heart.png";
import FilledHeart from "../../../img/Arianna's pngs/filledheart.png"
import "../../../styles/parkCard.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const ParkCard = ({ title, text, buttonText, imageUrl, state, id, onActivitySelect }) => {
  const truncatedText = truncateText(text, 10);
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites && store.favorites.includes(id);

  return (
    <div className="park-card-container" style={{ width: '1340px' }}>
      <Card className="park-card">
        <Card.Img className="park-card-image" variant="top" src={imageUrl} />
        <Card.Body className="park-card-body">
          <div>
            <Card.Title className="park-card-title">{title}</Card.Title>
            <Card.Text className="park-card-title"> State: {state}</Card.Text>
            <Card.Text className="park-card-text">{truncatedText}</Card.Text>
          </div>
          <div className="buttons">
            <Link to={"/parkprofilepage/" + id} style={{ textDecoration: 'none' }}>
              <button className="park-card-learn-more-button">Learn More</button>
            </Link>
            <Button
              onClick={() => {
                if (isFavorite) {
                  actions.deleteFavorites(id);
                } else {
                  actions.addFavorite(id);
                }
              }}
              className="park-card-heart-button"
              variant="primary"
            >
              {isFavorite ? <img src={FilledHeart} alt="Heart" /> : <img src={Heart} alt="Heart" />}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


const ParkCardList = ({ searchQuery, selectedActivity }) => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const parksPerPage = 20;

  const apiKey = "512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn";
  const apiUrl = "https://developer.nps.gov/api/v1/parks";

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        api_key: apiKey,
        limit: 500
      };

      const queryParams = new URLSearchParams(params);
      const fullUrl = `${apiUrl}?${queryParams}`;

      try {
        const response = await fetch(fullUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCardsData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const filteredCards = cardsData.filter((park) =>
    park.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedActivity || park.activities && park.activities.some(activity => activity.name === selectedActivity.name))
  );


  const indexOfLastPark = currentPage * parksPerPage;
  const indexOfFirstPark = indexOfLastPark - parksPerPage;
  const paginatedParks = filteredCards.slice(indexOfFirstPark, indexOfLastPark);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Container>
        <Row>
          {paginatedParks.map((park, index) => (
            <Col key={index} xs={12} md={3}>
              <ParkCard
                title={park.fullName}
                text={park.description}
                buttonText="Learn More"
                Heart={Heart}
                imageUrl={park.images[0].url}
                state={park.states}
                id={park.id}
                onActivitySelect={selectedActivity}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="pagination">
        {[...Array(Math.ceil(filteredCards.length / parksPerPage)).keys()].map((number) => (
          <Button className="page-number" key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </Button>
        ))}
      </div>
    </>
  );
};

export default ParkCardList;
