import React from "react";
import MessageBoxReciver from "../MessageBoxReciver/MessageBoxReciver";
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
          <MessageBoxReciver key={message.id}>{message.text}</MessageBoxReciver>
        )
      )}
    </div>
  );
}

export default MessageBoxBackground;
