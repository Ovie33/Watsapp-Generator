import React from "react";
import style from "./Options.module.css";

function Options({ selected }) {
  return (
    <div
      className={style.optionsContainer}
      style={{ display: selected ? "block" : "none" }}
    >
      <div className={style.options}>
        <ul>
          <li className={style.delete}>Delete</li>
          <li>Switch side</li>
        </ul>
      </div>
    </div>
  );
}

export default Options;
