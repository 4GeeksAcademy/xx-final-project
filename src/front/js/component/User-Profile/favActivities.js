import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../../styles/user-profile/favActivities.css"
import { Context } from "../../store/appContext.js"

export const FavActivities = () => {
  const { store, actions } = useContext(Context)
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const parkActivities = store.parkList.map(park => park.activities || []).flat();

    // Remove duplicate activities based on id
    const uniqueActivities = Array.from(new Set(parkActivities.map(activity => activity.id)))
      .map(id => parkActivities.find(activity => activity.id === id));

    setActivities(uniqueActivities);
  }, [store.parkList]);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      actions.getActivities();
    }
  }, [store.token]);

  return (
    <div className='fav-activity'>
      <div className='top-activity'>
        <Modal.Title>
          Favorite Activities:
        </Modal.Title>
        <Button className='addActivity' variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Choose up to 5</Modal.Title>
          <Modal.Title className='activity-length'>{store.activity.length}/5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {activities.filter(activity => !store.activity.includes(activity.name)).map((activity, index) => (
              <Button
                key={index}
                style={{ width: '144px', height: '144px', marginBottom: '15px' }}
                onClick={() => actions.handleActivitySelect(activity.name)}
              >
                {activity.name}
              </Button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {store.activity.map((activity, index) => (
          <span key={index} className="selected-activity">
            {activity}
            <Button variant="danger" size="sm" onClick={() => actions.handleActivityRemove(activity)}>
              Remove
            </Button>
          </span>
        ))}
      </div>
    </div>
  );
};
