import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './index.css';

const TaskForm = ({ endpoint, preload }) => {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);

    useEffect(() => {
        setInputs({...preload});
      }, [preload])

      const handleChange = event => {
        event.persist();
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value
        });
      };

      const handleSubmit = event => {
        event.preventDefault();
        console.log(inputs);
    
        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
          ...inputs,
          secret_token: (user && user.token)
        })
        .then(({ data }) => {
          if (data) {
            setNotification({
              type: "success",
              message: "Task was updated successfully"
            });
          }
    
          setRedirect(true);
        })
        .catch((error) => {
          setNotification({
            type: "danger",
            message: `There was an error updating the task: ${error.message}`
          });
        });
      };

      if (redirect) return <Redirect to="/tasks"/>;
      return (
<div class="task-input">
<div class="section-circle" id="to-do-circle"></div>
        <Form  onSubmit={handleSubmit}>
            <Form.Group class="assignment-button">
                <Form.Label >Task Description:</Form.Label>
                <Form.Control
                
                    onChange={handleChange} 
                    name="description" 
                    placeholder="i feel like having  a sick hair cut"
                    defaultValue={inputs.description}
                />
            </Form.Group>

            <Form.Group class="assignment-button">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                     onChange={handleChange} 
                     name="category" 
                     placeholder="{'barber'}"
                     defaultValue={inputs.category}
                />
            </Form.Group>

            <Form.Group class="assignment-button">
                <Form.Label>Date</Form.Label>
                <Form.Control
                   onChange={handleChange} 
                   name="date" 
                   placeholder="YYYY-MM-DD"
                   defaultValue={inputs.date}
                />
            </Form.Group>

          <Button variant="outline-success" type="submit">+</Button>
        </Form>
        </div>
      );
    }
     
    export default TaskForm;