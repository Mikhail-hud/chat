import React, { useState } from "react";
import "./JoinBlock.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from "react-bootstrap";
import axios from 'axios';

function JoinBlock({onLogin}) {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if(!roomId || !userName) {
      return alert('Please enter login data')
    };
    const obj = {
      roomId,
      userName
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  }

  return (
    <div className='join-block'>
      <input
        className="mb-3 input input-group-text"
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        className="mb-3 input-group-text"
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button disabled={isLoading} onClick={onEnter} variant="info" size="lg" block>{isLoading ? 'Loaging':'Login'}</Button>
    </div>
  );
}

export default JoinBlock;
