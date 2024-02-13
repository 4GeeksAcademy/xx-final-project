import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext"

import Background from "../../img/background-imgs/road-desert.jpg"
import "../../styles/login.css"
import { Link, useNavigate } from 'react-router-dom';


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token")
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const handleValidation = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    } return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      actions.login(email, password);
      navigate("/")
    }
  };

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) navigate("/")
  })

  return (
    <div className='background' style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh" }}>
      {store.token && store.token != "" && store.token != undefined ? (
        "You have successfully logged in" + store.token
      ) : (
        <div className='formContainer'>
          <Form onSubmit={handleLogin}>
            <h4>Log in</h4>
            <h6>Welcome to SIGHT SEEKER</h6>
            <Form.Group className="mt-1" controlId="formBasicEmail">
              <Form.Label> Email address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicPassword" >
              <Form.Label> Password </Form.Label>
              <div style={{ position: 'relative' }} >
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FontAwesomeIcon className='eye' style={{ position: 'absolute' }} onClick={togglePassword}
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
              Login
            </Button>
            <Link to="/ForgotPassword" className="mt-3 submit-btn">
              <Button
                className="mt-3 submit-btn"
                variant="primary"
              >Forgot Password?</Button>
            </Link>
          </Form>
        </div>
      )}
    </div>
  );
};