import React from "react";
import { Helmet } from "react-helmet";
import { Title } from "../Title";
import Style from "./Style.module.css";
import { Day } from "../Day";

export function Calendar(params) {
  return (
    <div className={Style.container}>
      <Helmet>
        <title>Count Down Calendar</title>
      </Helmet>


      <Title></Title>
      <Day number={"20"}></Day>
    </div>
  );
}
