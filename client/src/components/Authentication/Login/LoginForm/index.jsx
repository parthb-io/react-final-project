import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../../UserProvider';
import { NotificationContext } from '../../../shared/Notifications';
import { GlobalStoreContext } from '../../../shared/Globals';
import Axios from 'axios';

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [inputs, setInputs] = useState({});
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log("Handling the submit");

    if (inputs && inputs.email && inputs.password) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/authenticate`, inputs)
      .then(({ data }) => {
        setUser(data);
        localStorage.setItem('token', data.token);

        if (data && data.token) {
          setNotification({
            type: "success",
            message: "You have successfully logged in."
          });
        } else {
          setNotification({
            type: "danger",
            message: "Please check your email and password."
          });
        }
      })
      .catch(error => {
        console.error(error.message);
        
        setNotification({
          type: "danger",
          message: "Please check your email and password."
        });
      });
    }
  };

  return (
    <div class= "login-form">
    <Form  onSubmit={handleSubmit}>
      <p>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
</svg>
      </p>

      <Form.Group class = "username-text">
        <Form.Label >Email</Form.Label>
        <Form.Control
        
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group class="password-text">
        <Form.Label>Password</Form.Label>
        <Form.Control
        
          name="password"
          onChange={handleChange}
          type="password"
        />
        <Form.Text id="passwordHelpBlock" muted>
      Must be 8-20 characters long.
    </Form.Text>
      </Form.Group>

      <Form.Group >
        <Button class="login-button" type="submit">Login</Button>
      </Form.Group>
    </Form>
    </div>
  );
}
 
export default LoginForm;