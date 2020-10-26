import React, { useEffect, useReducer } from 'react';
import socket from './socket'
import './app.css'
import reducer from './reducer';
import JoinBlock from './components/JoinBlock';
import Chat from './components/Chat';

function App () {

  const  [state, dispath] = useReducer(reducer,  {
    joined: false,
    roomId: null,
    userName: null
  });
  const onLogin = (obj) => {
    dispath({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj)
  }
  window.socket = socket;

  useEffect (() => {
    socket.on('ROOM:JOINED', users => {
      console.log('Новый пользыватель', users)
    });
  }, [])


  return (
    <div className='wrap'>
      <main className='content'>
        {!state.joined ? <JoinBlock onLogin={onLogin}/>: <Chat/>}
      </main>
    </div>
  );
}

export default App;
 