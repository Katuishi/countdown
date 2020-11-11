import React from "react";
import { getDayWithWeekend } from "../../Util";
import Style from "./Style.module.css";

export function Qoute(params) {
  

  return (
    <div className={Style.container}>
      <p className={Style.title}>{getDayWithWeekend(24)}</p>
    </div>
  );
}
