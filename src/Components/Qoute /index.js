import React from "react";
import Style from "./Style.module.css";

export function Qoute(params) {
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <p className={Style.title}>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” — Malcolm X</p>
      </div>
    </div>
  );
}
