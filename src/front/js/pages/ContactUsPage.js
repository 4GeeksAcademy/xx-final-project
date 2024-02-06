import React, { useState } from "react";
import ContactUsForm from "../component/ContactUsForm";
import background from '../../img/login-background.jpg';
import { Modal, Button } from "react-bootstrap";

export const ContactUsPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (data) => {
        console.log("Form data:", data)
        // Store the form data in the state
        setFormData(data);
        // Show the modal
        handleShow();
        setFormData({});
        
    };

    console.log("Show modal:", showModal);

    return (
        <>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${background})`,
                    width: '100%',
                    height: '100vh',
                }}
            ></div>
            <div>
                <ContactUsForm
                onSubmit={handleSubmit}/>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    A member of our team will reach out to you as soon as possible.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
      );
}

