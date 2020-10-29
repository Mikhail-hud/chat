import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import socket from "../socket";

function Chat({ users, messages, userName, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages]);


  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      text: messageValue,
      roomId,
      userName,
    });
    onAddMessage({userName, text: messageValue})
    setMessageValue("");
  };

  return (
    <>
      <section className="users">
        <div>
          <h2 className='mt-2'>Room: {roomId}</h2>
          <hr/>
          <h3 className="mt-3">Online ({users.length}):</h3>
          <ul>
            {users.map((name, index) => (
              <li key={name + index}>{name}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="messages">
        <aside ref={messagesRef} className='messages-body'>
          {messages.map((message, index) => (
            <div key={message + index} className={message.userName === userName ? 'message-my' : 'message mt-3'}>
                <p className={message.userName === userName ? 'my' : ''} >{message.text}</p>
              <div className={message.userName === userName ? 'message-user-my' : ''}>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </aside>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            rows="3"
            className="input-group-text message-txt"
          ></textarea>
          <Button
            onClick={onSendMessage}
            variant="info"
            className="message-btn"
          >
            Send
          </Button>
        </form>
      </section>
    </>
  );
}

export default Chat;
