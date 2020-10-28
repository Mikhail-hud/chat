import React, { useState } from "react";
import "./Chat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import socket from "../socket";

function Chat({ users, messages, userName, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = useState("");

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
        <aside className="messages-body">
          {messages.map((message) => (
            <div className="message mt-3">
              <p>{message.text}</p>
              <div className="message-user">
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
