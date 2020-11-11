import React from "react";
import Style from "./Style.module.css";

export function Day({ number }) {
  return (
    <div className={Style.box}>
      <p className={Style.day_number}>{number}</p>
    </div>
  );
}
