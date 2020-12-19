import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { setNotification } = useContext(NotificationContext);

    useEffect(() => {
        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/tasks/destroy`, { _id: id, secret_token: (user && user.token) })
            .then(() => {
                setNotification(`Task was destroyed successfully.`);
            })
            .catch(error => {
                setNotification(`Couldn't destroy the selected task due to an error: ${error.message}`);
            });
    }, [globalStore, id, user, setNotification]);

    return <Redirect to="/tasks" />;
}

export default Destroy;