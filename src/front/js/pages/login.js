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

import Background from "../../img/login-background.jpg"

import "../../styles/login.css"
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const {store, actions} = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token")
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleClick = () => {
      actions.login(email,password); 
      navigate ("/")
    }

    useEffect(() => {
      if(store.token && store.token != "" && store.token != undefined) navigate("/")
      console.log("you should be navigated to somewhere else")
    })

    return(
        <div className='background' style={{ backgroundImage: `url(${Background})`, width: "100%", height: "100vh"}}>
          <Form.Label>Log In Form</Form.Label>
            {store.token && store.token != "" && store.token != undefined ? (
              "You have successfully logged in" + store.token
            ) : (
              <div>
                <Form> 
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
                    <div style={{ position: 'relative'}} >
                      <Form.Control 
                        type={ showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <FontAwesomeIcon className='eye' style={{ position:'absolute' }} onClick={ togglePassword }
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
                      onClick={handleClick}
                    >
                      Login
                    </Button>
                    <Button
                      className="mt-3 submit-btn"
                      variant="primary"
                    >Forgot Password?</Button>
          </Form>
              </div>
            )}
        </div>
      );
    };