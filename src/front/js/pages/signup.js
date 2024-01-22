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
import '../../styles/signup.css';
import background from '../../img/login-background.jpg';

export const SignUp = () => {
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const togglePassword =
    () => {
      setShowPassword(
        !showPassword
      );
    };

  return (
    <div className='background' style={{ backgroundImage: `url(${background})`}}>
    <Form>
      <Form.Group
        className="mt-5"
        controlId="formBasicEmail"
      >
        <Form.Label>
          Email address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share
          your email with
          anyone else.
        </Form.Text>
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
              position:
                'absolute',
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
        className="mt-3"
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
    </div>
  );
};
