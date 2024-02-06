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
import { Context } from '../store/appContext';

import Background from '../../img/login-background.jpg';

import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';

import GlassmorphismContainer from '../component/GlassmorphismContainer';

export const Login = () => {
  const { store, actions } =
    useContext(Context);
  const [email, setEmail] =
    useState('');
  const [
    password,
    setPassword,
  ] = useState('');
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);
  const navigate =
    useNavigate();

  const token =
    sessionStorage.getItem(
      'token'
    );
  const togglePassword =
    () => {
      setShowPassword(
        !showPassword
      );
    };

  const handleClick = (e) => {
    e.preventDefault();
    actions.login(
      email,
      password
    );
    navigate('/');
  };

  useEffect(() => {
    if (
      store.token &&
      store.token != '' &&
      store.token != undefined
    )
      navigate('/');
  });

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
        width: '100%',
        height: '100vh',
      }}
    >
      <Form.Label
        className="login-title"
        style={{
          fontSize: '50px',
          display: 'flex',
          justifyContent:
            'center',
        }}
      ></Form.Label>
      {store.token &&
      store.token != '' &&
      store.token !=
        undefined ? (
        'You have successfully logged in' +
        store.token
      ) : (
        <GlassmorphismContainer>
        <div className="formContainer">
          <Form
            onSubmit={
              handleClick
            }
          >
            <h4>Log in</h4>
            <h6>
              Welcome to SIGHT
              SEEKER
            </h6>
            <Form.Group
              className="mt-1"
              controlId="formBasicEmail"
            >
              <Form.Label>
                {' '}
                Email{' '}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(
                  e
                ) =>
                  setEmail(
                    e.target
                      .value
                  )
                }
              />
            </Form.Group>

            <Form.Group
              className="mt-3"
              controlId="formBasicPassword"
            >
              <Form.Label>
                {' '}
                Password{' '}
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
                  value={
                    password
                  }
                  onChange={(
                    e
                  ) =>
                    setPassword(
                      e.target
                        .value
                    )
                  }
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
                We'll never
                share your
                password with
                anyone else.
              </Form.Text>
            </Form.Group>
            <div className="buttonContainer">
              <Button
                className="mt-3 submit-btn"
                type="submit"
              >
                Login
              </Button>
              <Button
                className="mt-3 submit-btn"
              >
                Forgot
                Password?
              </Button>
            </div>
          </Form>
        </div>
        </GlassmorphismContainer>
      )}
    </div>
  );
};
