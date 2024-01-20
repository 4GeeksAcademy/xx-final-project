import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/signup.css';

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
        <Form.Control
          type={
            showPassword
              ? 'text'
              : 'password'
          }
          placeholder="Password"
          className="pass"
        />
        <div className="eye-icon">
          <FontAwesomeIcon
            onClick={
              togglePassword
            }
            className="i-icon"
            icon={
              showPassword
                ? faEyeSlash
                : faEye
            }
          />
        </div>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      ></Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};
