import React from 'react';
import './JoinBlock.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Button} from 'react-bootstrap';
import socket from '../socket';

function JoinBlock() {

  return (
    <Col>
        <input className='mb-3 input input-group-text' type='text' placeholder='Room ID!'/>
        <input className='mb-3 input-group-text' type='text' placeholder='Your Name!'/>
        <Button variant="info" size="lg" block>Login</Button>
    </Col>
  );
}

export default JoinBlock;
