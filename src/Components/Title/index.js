import React from "react";
import Style from "./Style.module.css";

export function Title() {
  const today = new Date();

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>
        {today.toLocaleString("us-US", { month: "long", day: "numeric" })}
      </h1>
    </div>
  );
}
