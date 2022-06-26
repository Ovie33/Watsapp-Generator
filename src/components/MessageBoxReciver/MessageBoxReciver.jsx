import React, { useState } from "react";
import style from "./MessageBoxReciver.module.css";
import Options from "../Options/Options.jsx";

function MessageBoxReciver({ children }) {
  const [display, setDisplay] = useState("none");

  const onClick = () => {
    setDisplay(() => {
      if (display === "none") {
        setDisplay("");
      } else {
        setDisplay("none");
      }
    });
  };

  return (
    <div>
      <div onClick={onClick} className={style.reciverBox}>
        <div className={style.reciverText}>
          <p>{children}</p>
        </div>
        <div className={style.reciverTime}>
          <p className={style.time}>12:07 PM</p>
        </div>
      </div>
      <div className="optionsBackground"></div>
      <Options value={display} />
    </div>
  );
}

export default MessageBoxReciver;
