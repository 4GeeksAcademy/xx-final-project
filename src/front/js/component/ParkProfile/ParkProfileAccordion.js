import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function ParkProfileAccordion({ park }) {
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);


    return (
      <div className="entire-accordion">
        <Accordion defaultActiveKey="{null}">
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
            {park.entrancePasses.length > 0 ? (
            <ul>
              {park.entranceFees.map((fee, index) => (
                <li key={index}>
                  <strong>{fee.title}: ${fee.cost} </strong>
                    {fee.description}
                </li>
              ))}
              {park.entrancePasses.map((pass, index) => (
                <li key={index}>
                  <strong>{pass.title}: ${pass.cost} </strong>
                    {pass.description}
                </li>
              ))}
            </ul>
            ) : (
              <p>No entrance fees</p>
            )}
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
            <p key={index} className="phone-number">
              {contact.type}: {park.contacts.phoneNumbers.map((contact, index) => (
            <p key={index}>{contact.phoneNumber} {contact.extension}</p>
            ))}
            </p>
            ))}
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    );
  };

export default ParkProfileAccordion;