import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from "../store/appContext";
import Background from "../../img/background-imgs/road-desert.jpg";
import "../../styles/login.css"
import { useNavigate } from 'react-router-dom';


export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

    return (
        <div className='background' style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh" }}>
            <div className='formContainer'>
              <Form>
                <h4>Recover Password</h4>
                <Form.Group className="mt-1" controlId="formBasicEmail">
                <Form.Label> Email address </Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button
              className="mt-3 submit-btn"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            </Form>
            </div>
        </div>
    );
};