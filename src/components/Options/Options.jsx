import React from "react";
import style from "./Options.module.css";

function Options({ selected, id, setMessages, setSelectedMessageId }) {
  return (
    <div
      className={style.optionsContainer}
      style={{ display: selected ? "block" : "none" }}
    >
      <div className={style.options}>
        <ul>
          <li
            onClick={() => {
              setMessages((prevMessages) =>
                prevMessages.filter((message) => message.id !== id)
              );
              setSelectedMessageId(0);
            }}
            className={style.delete}
          >
            Delete
          </li>
          <li
            onClick={() => {
              setMessages((prevMessages) =>
                prevMessages.map((message) => {
                  if (message.id === id) {
                    if (message.owner === "sender") {
                      message.owner = "receiver";
                    } else {
                      message.owner = "sender";
                    }
                  }

                  return message;
                })
              );
              setSelectedMessageId(0);
            }}
          >
            Switch side
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Options;
