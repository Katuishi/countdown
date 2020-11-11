import React  from "react";
import { Helmet } from "react-helmet";
import { Title } from "../Title";
import Style from "./Style.module.css";
import { Day } from "../Day";

export function Calendar(params) {

  // const calendarDay = new Date()
  const days = [1,2,3,4,5,6,7,
                8,9,10,11,12,13,14,
                15,16,17,18,19,20,21,
                22,23,24,25,26,27,28]

  
  return (
    <div className={Style.container}>
      <Helmet>
        <title>Count Down Calendar</title>
      </Helmet>

      <Title/>
      <div className={Style.days_container}>
          {
            days.map((x)=>
              (<Day number={x}></Day>)
            )
          }
      </div>
     
    </div>
  );
}
