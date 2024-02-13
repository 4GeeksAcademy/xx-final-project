import React, {
  useContext,
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
import background from "../../img/background-imgs/winter.jpg"
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const token = sessionStorage.getItem("token")
  
  const handleValidation = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    } return true;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (handleValidation()){
      actions.signup(email, password);
      navigate("/login")
    }
  };

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

  if(store.token && store.token != "" && store.token != undefined) navigate("/")

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
        width: '100%',
        height: '100vh',
      }}
    >
        {store.token && store.token != "" && store.token != undefined ? (
            console.log("You are now signed up!" + store.token)
        ) : (
          <div className='formContainer'>
             <Form onSubmit={handleSignUp}>
              <h4>Sign up</h4>
              <h6>Welcome to SIGHT SEEKER</h6>
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
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
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
              type={ showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              className="eye"
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
          className="mt-3 submit-btn"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
          </div>
        )}
    </div>
  );
};
