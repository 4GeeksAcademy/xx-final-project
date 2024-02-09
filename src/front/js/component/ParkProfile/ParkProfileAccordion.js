import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function ParkProfileAccordion({ park }) {
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);


    return (
      <div className="entire-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Activities
            </Accordion.Header>
            <Accordion.Body>
            {park.activities.map((activity, index) => (
            <p key={index}>{activity.name}</p>
            ))}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Costs
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              {park.entranceFees.map((fee, index) => (
                <li key={index}>
                  <strong>{fee.title}: </strong>
                    {fee.description} - ${fee.cost}
                </li>
              ))}
            </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Directions
            </Accordion.Header>
            <Accordion.Body>
            <p>{park.directionsInfo}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Weather
            </Accordion.Header>
            <Accordion.Body>
            <p>{park.weatherInfo}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Phone Numbers
            </Accordion.Header>
            <Accordion.Body>
            {park.contacts.phoneNumbers.map((contact, index) => (
            <p key={index}>{contact.phoneNumber} {contact.extension} ({contact.type})</p>
            ))}
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    );
  };

export default ParkProfileAccordion;