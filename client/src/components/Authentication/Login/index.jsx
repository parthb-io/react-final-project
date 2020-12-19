import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';
import './login.css';

const Login = () => {
  return (
    <>
      <Header title="GoService Welcome">
        <p>
          <strong>Welcome</strong>.
        </p>
        
        <p>
          The header is editable under <strong>/src/components/Authentication/Login/index.jsx</strong>
        </p>
      </Header>
      
      <Container>
        <p>
          The content is editable under <strong>/src/components/Authentication/Login/index.jsx</strong>
        </p>
        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;