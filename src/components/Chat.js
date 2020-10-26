import React from "react";
import "./Chat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Chat() {
  return (
    <>
      <section className="users" >
        <div>
          <h2 className='mt-3'>User Mikhail</h2>
          <ul>
            <li>Test User</li>
            <li>Test User</li>
          </ul>
        </div>
      </section>
      <section className="messages" >
        <div className="message mt-3">
          <p>Hello, how was your day?</p>
          <div className='message-user'>
            <span>Text User</span>
          </div>
        </div>
        <div className="message mt-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque sequi deserunt odio consequatur totam rem magni dolor aliquid sint fugiat ipsum repellat eos, amet nobis perspiciatis! Esse, asperiores quisquam!</p>
          <div className='message-user'>
            <span>Text User</span>
          </div>
        </div>
        <div className="message mt-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque sequi deserunt odio consequatur totam rem magni dolor aliquid sint fugiat ipsum repellat eos, amet nobis perspiciatis! Esse, asperiores quisquam!</p>
          <div className='message-user'>
            <span>Text User</span>
          </div>
        </div>
        <form>
          <textarea className='input-group-text message-txt'></textarea>
          <Button variant="info" className='message-btn'>Send</Button>
        </form>
      </section>
    </>
  );
}

export default Chat;
