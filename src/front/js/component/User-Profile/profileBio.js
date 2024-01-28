import React from "react";
import Form from 'react-bootstrap/Form';
import "../../../styles/user-profile/profileBio.css"

export const ProfileBio = () => {
  return (
    <div className="frame">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First & Last Name</Form.Label>
          <Form.Control type="text" placeholder="First Last" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Get to know me:</Form.Label>
          <Form.Control as="textarea" placeholder="Type something about yourself here!" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};