import React from "react";
import { FaMoon } from "react-icons/fa";
import style from "../MessageBox/MessageBox.module.css";
import MessageBoxBackground from "../MessageBoxBackground/MessageBoxBackground";
function MessageBox() {
  return (
    <div>
      <div className={style.messageBox}>
        <h3 className={style.messageBoxHeader}>CHAT PREVIEW</h3>
        <FaMoon className={style.messageBoxIcon} />
      </div>
      <div>
        <MessageBoxBackground />
      </div>
    </div>
  );
}

export default MessageBox;
