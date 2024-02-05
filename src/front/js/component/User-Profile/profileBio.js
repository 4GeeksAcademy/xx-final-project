import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../styles/user-profile/profileBio.css";
import { Button, Modal } from "react-bootstrap";

export const ProfileBio = () => {
  const [form, setForm] = useState({});
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <Button className="biobtn" onClick={handleShow}>Add Name and Bio</Button>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit your info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="frame">
            <Form>
              <Form.Group
                className="name-input mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First & Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Last"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Get to know me:</Form.Label>
                <Form.Control
                  className="bio-input"
                  as="textarea"
                  placeholder="Type something about yourself here!"
                  value={form.bio}
                  onChange={(e) => setField("bio", e.target.value)}
                />
                <Button style={{ marginTop: "5px" }} onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
