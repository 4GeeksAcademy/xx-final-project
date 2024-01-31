import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PopupSelection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const buttons = Array.from({ length: 40 }, (_, index) => `Button ${index + 1}`);

  return ( 
    <>
      <Button className='activity-button' variant="primary" onClick={handleShow}>
        Search by activity
      </Button>

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
    </>
  );
}

export default PopupSelection;
