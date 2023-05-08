import React from "react";
import "./App.css";

export default function FormateDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours().toString().padStart(2, "0");
  let minutes = props.date.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes}{" "}
    </div>
  );
}
