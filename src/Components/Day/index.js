import React from "react";
import Style from "./Style.module.css";

export function Day({ number }) {
  let currentDay = new Date();
  let custmonDay = new Date(2020, 10,number)
  return (
    <div className={Style.box}>
      <p className={Style.day_number}>{number}</p>
      {number <= currentDay.getDate() &&
      ![0, 6].includes(custmonDay.getDay()) ? (
        <div className={Style.mark}>x</div>
      ) : null}
    </div>
  );
}
