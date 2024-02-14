import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Background from "../../img/background-imgs/road-desert.jpg";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const ForgotPassword = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");

  const handleRequestPasswordReset = async () => {
    try {
      // await actions.forgotPassword(email);
      alert(`Success! Please check ${email} to proceed with password reset.`);
      setEmail("");
    } catch (error) {
      alert(`Error! ${error}`);
    }
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh" }}>
      <div className='formContainer'>
        <Form>
          <h4>Recover Password</h4>
          <Form.Group className="mt-1" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={handleRequestPasswordReset}
            className="mt-3 submit-btn"
            variant="primary"
            type="button"
          >
            Request Password Reset
          </Button>
        </Form>
      </div>
    </div>
  );
};
