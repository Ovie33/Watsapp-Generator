import React, { useState } from "react";
import MessageBoxReciver from "../MessageBoxReciver/MessageBoxReciver";
import MessageBoxSender from "../MessageBoxSender/MessageBoxSender";
import style from "./MessageBoxBackground.module.css";
import Blur from "../Blur/Blur";

function MessageBoxBackground({ messages, setMessages, background }) {
  const [selectedMessageId, setSelectedMessageId] = useState(0);
  console.log(background);

  return (
    <div
      className={style.messageBackground}
      style={{ backgroundImage: `url(${background})` }}
    >
      {messages.map((message) =>
        message.owner === "sender" ? (
          <MessageBoxSender
            selectedMessageId={selectedMessageId}
            setSelectedMessageId={setSelectedMessageId}
            key={message.id}
            id={message.id}
            setMessages={setMessages}
          >
            {message.text}
          </MessageBoxSender>
        ) : (
          <MessageBoxReciver
            selectedMessageId={selectedMessageId}
            setSelectedMessageId={setSelectedMessageId}
            key={message.id}
            id={message.id}
            setMessages={setMessages}
          >
            {message.text}
          </MessageBoxReciver>
        )
      )}

      <Blur shown={selectedMessageId !== 0} />
    </div>
  );
}

export default MessageBoxBackground;
