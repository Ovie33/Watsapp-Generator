import React from "react";
import style from "./index.module.css";

function Blur({ shown }) {
  return (
    <div
      className={style.blur}
      style={{ display: shown ? "block" : "none" }}
    ></div>
  );
}

export default Blur;
