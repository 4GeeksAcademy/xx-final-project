import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/contactus.css';

function ContactUsForm({ onSubmit }) {

  const [formData, setFormData] = useState({
    // Your form fields and initial values
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to parent component
    onSubmit(formData);
    setFormData({ email: "", message: "" })
  };

  return (
    <div className='contactUs'>
    <Form className="formContainer" onSubmit={handleSubmit}>
    <h4>Contact Us</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={formData.email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={formData.message}>
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="contactButtonContainer">
      <Button
        className="mt-3 submit-btn"
        type="submit"
        >
        Submit
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default ContactUsForm;