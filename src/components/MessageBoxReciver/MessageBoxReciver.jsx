import React, { useState, useEffect } from "react";
import style from "./MessageBoxReciver.module.css";
import Options from "../Options/Options.jsx";

function MessageBoxReciver({
  children,
  setSelectedMessageId,
  selectedMessageId,
  id,
  setMessages,
}) {
  const [selected, setSelected] = useState(false);

  const handleFocusAndBlur = () => {
    setSelected((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (selected) {
      setSelectedMessageId(id);
    } else {
      setSelectedMessageId(0);
    }
  }, [selected]);

  return (
    <div
      tabIndex={-1}
      onFocus={handleFocusAndBlur}
      onBlur={handleFocusAndBlur}
      style={{ zIndex: selectedMessageId === id ? 3 : 1 }}
    >
      <div className={style.reciverBox}>
        <div className={style.reciverText}>
          <p>{children}</p>
        </div>
        <div className={style.reciverTime}>
          <p className={style.time}>12:07 PM</p>
        </div>
      </div>
      <Options
        setSelectedMessageId={setSelectedMessageId}
        id={id}
        setMessages={setMessages}
        selected={selected}
      />
    </div>
  );
}

export default MessageBoxReciver;
