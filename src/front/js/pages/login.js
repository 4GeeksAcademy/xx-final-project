import React, {
    useState,
  } from 'react';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    faEye,
    faEyeSlash,
  } from '@fortawesome/free-solid-svg-icons';

import Background from "../../img/login-background.jpg"

import "../../styles/login.css"

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    return(
        <div className='background' style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh"}}>
        <Form>
          <Form.Group
            className="mt-1"
            controlId="formBasicEmail"
          >
            <Form.Label>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group
            className="mt-3"
            controlId="formBasicPassword"
          >
            <Form.Label>
              Password
            </Form.Label>
            <div
              style={{
                position:
                  'relative',
              }}
            >
              <Form.Control
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                placeholder="Enter password"
              />
              <FontAwesomeIcon className='eye'
                style={{
                  position:'absolute',
                }}
                onClick={
                  togglePassword
                }
                icon={
                  showPassword
                    ? faEyeSlash
                    : faEye
                }
              />
            </div>
            <Form.Text className="text-muted">
              We'll never share
              your password with
              anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            className="mt-3 submit-btn"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="mt-3 submit-btn"
            variant="primary"
          >Forgot Password?</Button>
        </Form>
        </div>
      );
    };