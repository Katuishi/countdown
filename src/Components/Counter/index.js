import React from "react";
import { getDayWithWeekend } from "../../Util";
import Style from "./Style.module.css";

export function Counter(params) {
  return (
    <div className={Style.container}>
      <p className={Style.title}>{getDayWithWeekend(23)}</p>
    </div>
  );
}
