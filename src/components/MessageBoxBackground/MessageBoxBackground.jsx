import React from "react";
import dark from "./messageBackgroundDark.svg";
import style from "../MessageBoxBackground/MessageBoxBackground.module.css";

function MessageBoxBackground() {
  return (
    <div className={style.messageBackground}>
      <img src={dark} alt="backgroung" />
    </div>
  );
}

export default MessageBoxBackground;
