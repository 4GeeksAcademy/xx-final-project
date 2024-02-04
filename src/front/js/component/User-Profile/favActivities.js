import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';

import "../../../styles/user-profile/favActivities.css"
import { Form } from "react-bootstrap";

export const FavActivities = () => {
  
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const buttons = Array.from({ length: 40 }, (_, index) => `Button ${index + 1}`);

  return (
   <div>
     <Form>
        <Form.Group className="name-input mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Activities:</Form.Label>
          <FontAwesomeIcon className='plus' style={{ position:'absolute' }}
            icon={faPlus}
          />
        </Form.Group>
      </Form>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>What's Your Next Adventure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {buttons.map((buttonText, index) => (
              <Button
                key={index}
                variant="secondary"
                style={{ width: '144px', height: '144px', marginBottom: '15px' }}
              >
                {buttonText}
              </Button>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};