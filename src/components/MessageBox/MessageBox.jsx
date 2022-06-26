import React from "react";
import { FaMoon } from "react-icons/fa";
import style from "../MessageBox/MessageBox.module.css";
import MessageBoxBackground from "../MessageBoxBackground/MessageBoxBackground";
import MessageProfileBox from "../MessageProfileBox/MessageProfileBox";
function MessageBox({ messages }) {
  return (
    <div className={style.messageBoxContainer}>
      <div className={style.messageBoxHeaderContainer}>
        <h3 className={style.messageBoxHeader}>CHAT PREVIEW</h3>
        <FaMoon className={style.messageBoxIcon} />
      </div>
      <div>
        <MessageProfileBox />
      </div>
      <div>
        <MessageBoxBackground messages={messages} />
      </div>
      <div className={style.blur}></div>
    </div>
  );
}

export default MessageBox;
