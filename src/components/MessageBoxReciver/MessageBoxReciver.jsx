import React from "react";
import style from "./MessageBoxReciver.module.css";

function MessageBoxReciver({ children }) {
  return (
    <div className={style.reciverBox}>
      <div className={style.reciverText}>
        <p>{children}</p>
      </div>
      <div className={style.reciverTime}>
        <p className={style.time}>12:07 PM</p>
      </div>
    </div>
  );
}

export default MessageBoxReciver;
