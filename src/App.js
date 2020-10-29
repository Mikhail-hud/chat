import React, { useEffect, useReducer } from "react";
import socket from "./socket";
import "./app.css";
import reducer from "./reducer";
import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import axios from "axios";


function App() {
  const [state, dispath] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    messages: [],
    users: [],
    
  });
  window.state = state;
  const onLogin = async (obj) => {
    dispath({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`https://chat-bym.herokuapp.com/rooms/${obj.roomId}`);
    setUsers(data.users);
    dispath({
      type: 'SET_DATA',
      payload:data,
    })
  };
 
  const setUsers = (users) => {
    dispath({
      type: "SET_USERS",
      payload: users,
    });
  };

  const addMessage = (message) => {
    dispath({
      type: "MEW_MESSAGE",
      payload: message,
    });
  }

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", addMessage);
  }, []);

  return (
    <div className="wrap">
      <main className="content">
        {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat {...state} onAddMessage={addMessage} />}
      </main>
    </div>
  );
}

export default App;
