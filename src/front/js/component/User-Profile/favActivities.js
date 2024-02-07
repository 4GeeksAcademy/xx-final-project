import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../../styles/user-profile/favActivities.css"

export const FavActivities = ({ onActivitySelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn`)
      .then(response => response.json())
      .then(data => {
        // Extract activities from all parks
        const parkActivities = data.data.map(park => park.activities || []).flat();

        // Remove duplicate activities based on id
        const uniqueActivities = Array.from(new Set(parkActivities.map(activity => activity.id)))
          .map(id => parkActivities.find(activity => activity.id === id));

        setActivities(uniqueActivities);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleActivitySelect = (activity) => {
    onActivitySelect(activity);
    handleClose();
  };

  return (
    <div className='fav-activity'>
    <Modal.Title>
      Favorite Activities:
    </Modal.Title>
      <Button className='activity-button' variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Choose up to 5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {activities.map((activity, index) => (
              <Button
                key={index}
                variant="secondary"
                style={{ width: '144px', height: '144px', marginBottom: '15px' }}
                onClick={() => handleActivitySelect(activity)}
              >
                {activity.name}
              </Button>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
