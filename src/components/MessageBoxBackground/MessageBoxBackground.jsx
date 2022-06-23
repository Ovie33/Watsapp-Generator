import React from "react";
import MessageBoxSender from "../MessageBoxSender/MessageBoxSender";
import dark from "./messageBackgroundDark.svg";
import light from "./messageBackgroundLight.svg";
import style from "./MessageBoxBackground.module.css";

function MessageBoxBackground({ messages }) {
  return (
    <div
      className={style.messageBackground}
      style={{ backgroundImage: `url(${dark})` }}
    >
      {messages.map((message) =>
        message.owner === "sender" ? (
          <MessageBoxSender key={message.id}>{message.text}</MessageBoxSender>
        ) : (
          <div key={message.id}></div>
        )
      )}
    </div>
  );
}

export default MessageBoxBackground;
