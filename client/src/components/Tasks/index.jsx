import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './App.css';

const Tasks = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);
  
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/tasks`)
        .then(({ data }) => {
          setTasks(data);
        })
        .catch(error => {
          setNotification({
            type: "warning",
            message: `There was an error retrieving the tasks: ${error.message}`
          });
        });
      }, [globalStore, setNotification]);

    return (
        <>
          <Header title="Tasks"/>
    
          <Container>
            <p><strong>Services are now just a click away, any time, anywhere.</strong></p>
            {tasks && tasks.length > 0 ? (
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr id="titles">
                    
                    <th>Desc</th>
                    <th>Owner</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                
                <tbody>
              {tasks.map((task, i) => (
                <tr key={i}>
                  <td >
                    {task.description}
                  </td>

                  <td >
                    {task.owner}
                  </td>

                  <td >
                    {task.date}
                  </td>

                  <td>
                    {task.category}
                  </td>

                  <td >
                    <Link to={`/tasks/edit/${task._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`/tasks/destroy/${task._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            </Table>
        ) : null}
          </Container>
        </>
      );
}
 
export default Tasks;