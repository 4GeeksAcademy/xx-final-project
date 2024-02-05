import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="homeCardContainer ">
    <div className="text-center mt-5">
      <h1>Parks</h1>
      {/* <div >
        {store.parkList?.map((park, index) => (
          <Card key={index} className="m-2">
            <Card.Body>
              <Card.Title>{park.fullName}</Card.Title>
              <Link to={"/parkprofilepage/" + park.id}>
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div> */}
      <Row>
        {store.parkList?.map((park, index) => (
          <Col key={index} lg={4}>
            <Card className="m-5">
              <Card.Body>
                <Card.Title className="mx-4">{park.fullName}</Card.Title>
                <Link to={"/parkprofilepage/" + park.id}>
                  <Button className="mt-4" variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
};
