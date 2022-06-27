import React from "react";
import Options from "../Options/Options";
import style from "./MessageBoxSender.module.css";

function MessageBoxSender({
  children,
  setSelectedMessageId,
  selectedMessageId,
  id,
  setMessages,
}) {
  return (
    <div className={style.messageBoxSender}>
      <div>
        <div className={style.messageBoxSenderText}>
          <p>{children}</p>
        </div>
        <div className={style.svg}>
          <p className={style.messageBoxSenderTime}>12:07 PM</p>
          <svg
            width="11"
            height="6"
            className={style.messageBoxSenderIcon}
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.161621 3.82562L2.76919 5.81579L6.95626 1.03058L6.1283 0.307076L2.61855 4.31821L0.827945 2.95148L0.161621 3.82562ZM10.8047 1.03058L9.97671 0.307076L6.47521 4.30887L6.06123 3.9779L5.37401 4.83665L6.60935 5.82514L10.8047 1.03058Z"
              fill="#5E8E8B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MessageBoxSender;
