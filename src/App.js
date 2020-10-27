import React, { useEffect, useReducer } from 'react';
import socket from './socket'
import './app.css'
import reducer from './reducer';
import JoinBlock from './components/JoinBlock';
import Chat from './components/Chat';
import axios from 'axios';

function App () {

  const  [state, dispath] = useReducer(reducer,  {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],

  });
  const onLogin = async (obj) => {
    dispath({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    setUsers(data.users);
  }
  window.socket = socket;
  window.state = state;

  const setUsers = (users) => {
    dispath({
      type:'SET_USERS',
      payload:users,
    })
  }

  useEffect (() => {
    socket.on('ROOM:SET_USERS', setUsers);
  }, []);


  return (
    <div className='wrap'>
      <main className='content'>
        {!state.joined ? <JoinBlock onLogin={onLogin}/>: <Chat {...state} />}
      </main>
    </div>
  );
}

export default App;
 