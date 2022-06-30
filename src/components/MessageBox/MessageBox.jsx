import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import style from "../MessageBox/MessageBox.module.css";
import MessageBoxBackground from "../MessageBoxBackground/MessageBoxBackground";
import MessageProfileBox from "../MessageProfileBox/MessageProfileBox";

function MessageBox({ messages, setMessages, backgroung, setBackground }) {
  return (
    <div className={style.messageBoxContainer}>
      <div className={style.messageBoxHeaderContainer}>
        <h3 className={style.messageBoxHeader}>CHAT PREVIEW</h3>
        <FaMoon className={style.messageBoxIcon} />
      </div>
      <MessageProfileBox />
      <MessageBoxBackground
        messages={messages}
        setMessages={setMessages}
        backgroung={backgroung}
      />
    </div>
  );
}

export default MessageBox;
