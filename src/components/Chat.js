import React, { useState } from "react";
import "./Chat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Chat({ users, messages }) {
  const [messageValue, setMessageValue] = useState("");
  return (
    <>
      <section className="users">
        <div>
          <h2 className="mt-3">Online ({users.length}):</h2>
          <ul>
            {users.map((name, index) => (
              <li key={name + index}>{name}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="messages">
        {messages.map(messages => (
          <div className="message mt-3">
            <p>{messages.text}</p>
            <div className="message-user">
              <span>{messages.userName}</span>
            </div>
          </div>
        ))}
        <div className="message mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            atque sequi deserunt odio consequatur totam rem magni dolor aliquid
            sint fugiat ipsum repellat eos, amet nobis perspiciatis! Esse,
            asperiores quisquam!
          </p>
          <div className="message-user">
            <span>Text User</span>
          </div>
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            rows="3"
            className="input-group-text message-txt"
          ></textarea>
          <Button variant="info" className="message-btn">
            Send
          </Button>
        </form>
      </section>
    </>
  );
}

export default Chat;
