import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Tasks">
      Services are now just a click away, any time, anywhere.
      </Header>

      <Container>
        <Form endpoint="tasks"/>
      </Container>
    </>
  );
}
 
export default New;