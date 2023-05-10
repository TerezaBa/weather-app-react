import React from "react";

export default function FormateDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours().toString().padStart(2, "0");
  let minutes = props.date.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes}{" "}
    </div>
  );
}
