import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ParkProfileAccordion =
  () => {
    return (
      <div className="entire-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Activities
            </Accordion.Header>
            <Accordion.Body>
              Details about
              activities at
              the park
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Cost
            </Accordion.Header>
            <Accordion.Body>
              Details about the costs associated with visiting the park
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Accessibility
            </Accordion.Header>
            <Accordion.Body>
              Details about accessibility at the park
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Parking
            </Accordion.Header>
            <Accordion.Body>
              Details about parking at the park
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Topics
            </Accordion.Header>
            <Accordion.Body>
              Details about the park
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  };

export default ParkProfileAccordion;