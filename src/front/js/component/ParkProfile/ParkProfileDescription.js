import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'


function ParkProfileDescription() {
  return (
    <Card className="parkDescription mb-5">
      <Card.Header className='name-text'>Name of Park</Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Link to more details</Button>
      </Card.Body>
      <Card.Footer>
        <p className='description-footer-heading'>Hours of Operation</p>
        <div className="hours-text">
          <p> <FontAwesomeIcon icon={faClock} /> Monday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Tuesday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Wednesday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Thursday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Friday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Saturday</p>
          <p> <FontAwesomeIcon icon={faClock} /> Holidays may affect these hours</p>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ParkProfileDescription;