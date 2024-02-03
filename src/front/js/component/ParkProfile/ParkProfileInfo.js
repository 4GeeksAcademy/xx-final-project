import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function ParkProfileInfo({ park }) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <Card className="parkInfo mb-5">
        <Card.Header className="name-text">
          {park.fullName}
          <p className="address">
            {park.addresses.length > 0 &&
            park.addresses[0].line1 &&
            park.addresses[0].city &&
            park.addresses[0].stateCode &&
            park.addresses[0].postalCode
              ? `${park.addresses[0].line1}, ${park.addresses[0].city}, ${park.addresses[0].stateCode} ${park.addresses[0].postalCode}`
              : "Park Address"}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{park.description || "Loading..."}</Card.Text>
          <Button variant="primary">Link to more details</Button>
        </Card.Body>
        <Card.Footer>
          <p className="hrs-of-operation-header">Hours of Operation</p>
          <div className="hours-text">
            {park.operatingHours.map((hours, index) => (
              <p key={index}>
                {" "}
                <FontAwesomeIcon icon={faClock} /> {hours.description}
              </p>
            ))}
            <p>*Holidays may affect these hours</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ParkProfileInfo;
