import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import style from "../MessageBox/MessageBox.module.css";
import MessageBoxBackground from "../MessageBoxBackground/MessageBoxBackground";
import MessageProfileBox from "../MessageProfileBox/MessageProfileBox";
import dark from "../MessageBoxBackground/messageBackgroundDark.svg";

function MessageBox({ messages, setMessages, backgroung, onClick }) {
  return (
    <div className={style.messageBoxContainer}>
      <div className={style.messageBoxHeaderContainer}>
        <h3 className={style.messageBoxHeader}>CHAT PREVIEW</h3>
        <button className={style.messageBoxIcon}>
          {backgroung === dark ? (
            <FaMoon onClick={onClick} />
          ) : (
            <FaSun onClick={onClick} />
          )}
        </button>
      </div>
      <MessageProfileBox />
      <MessageBoxBackground
        messages={messages}
        setMessages={setMessages}
        background={backgroung}
      />
    </div>
  );
}

export default MessageBox;
