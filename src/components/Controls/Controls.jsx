import React, { useState } from "react";
import style from "./Controls.module.css";
import { FaEllipsisV } from "react-icons/fa";
import ControlsOptons from "../Options/ControlsOptons";

function Controls({ setWhoIsToSend, whoIsToSend, setMessages }) {
  const [inputText, setInputText] = useState("");
  const [display, setDisplay] = useState("none");

  const onClick = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: inputText,
        id: Math.floor(Math.random() * 300),
        owner: whoIsToSend,
      },
    ]);
    setInputText("");
  };
  const Display = () => {
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
      <div className={style.controlsBox}>
        <h4 className={style.controlHeader}>CONTROLS</h4>
        <div className={style.inputContainer}>
          <input
            type="text"
            className={style.controlInput}
            placeholder="Message"
            value={inputText}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onClick();
              }
            }}
            onChange={(e) => {
              setInputText(e.currentTarget.value);
            }}
          />
          <button onClick={onClick}>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.65177 5.47144L1.65254 6.1378C1.60656 6.14547 1.56342 6.16512 1.52744 6.19476C1.49146 6.2244 1.46392 6.26299 1.44759 6.30665L0.0686735 10.0011C-0.0630057 10.3409 0.29221 10.6648 0.618222 10.5013L10.1756 5.72259C10.2416 5.68948 10.2972 5.63864 10.336 5.57577C10.3748 5.5129 10.3954 5.44046 10.3954 5.36657C10.3954 5.29268 10.3748 5.22025 10.336 5.15738C10.2972 5.0945 10.2416 5.04367 10.1756 5.01056L0.618222 0.231879C0.29221 0.0688731 -0.0630057 0.392762 0.0686735 0.732048L1.44812 4.4265C1.46445 4.47016 1.49199 4.50875 1.52797 4.53839C1.56395 4.56803 1.60709 4.58767 1.65307 4.59535L5.6523 5.26171C5.67724 5.26569 5.69995 5.27843 5.71635 5.29765C5.73275 5.31687 5.74175 5.34131 5.74175 5.36657C5.74175 5.39184 5.73275 5.41627 5.71635 5.43549C5.69995 5.45471 5.67724 5.46746 5.6523 5.47144H5.65177Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={style.controlControls}>
          <div className={style.controlSenderBtn}>
            <input
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setWhoIsToSend("sender");
                }
              }}
              type="radio"
              id="sender"
              name="send"
              defaultChecked={true}
            />
            <label htmlFor="sender">Sender</label>
          </div>
          <div className={style.controlReciverBtn}>
            <input
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setWhoIsToSend("receiver");
                }
              }}
              type="radio"
              id="reciver"
              name="send"
            />
            <label htmlFor="reciver">Receiver</label>
          </div>
          <FaEllipsisV onClick={Display} className={style.icon} />
        </div>
        <button className={style.controlBtn}>SAVE IMAGE</button>
      </div>
      <div>
        <ControlsOptons value={display} />
      </div>
    </div>
  );
}

export default Controls;
