import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import JoinBlock from './components/JoinBlock';

function App() {

  return (
    <Container fluid className='wrapper'>
      <Row>
        <JoinBlock/>
      </Row>
    </Container>
  );
}

export default App;
