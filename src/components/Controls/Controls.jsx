import React from "react";
import style from "./Controls/Controls.module.css";
import { FaEllipsisV } from "react-icons/fa";

function Controls() {
  return (
    <div className={style.controlsBox}>
      <h4 className={style.controlHeader}>CONTROLS</h4>
      <input type="text" className={style.controlInput} placeholder="Message" />
      <div className={style.controlControls}>
        <div className={style.controlSenderBtn}>
          <input type="radio" id="sender" />
          <label htmlFor="sender">Sender</label>
        </div>
        <div className={style.controlReciverBtn}>
          <input type="radio" id="reciver" />
          <label htmlFor="reciver">Reciver</label>
        </div>
        <FaEllipsisV className={style.icon} />
      </div>
      <button className={style.controlBtn}>SAVE IMAGE</button>
    </div>
  );
}

export default Controls;
