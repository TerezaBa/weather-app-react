import React from "react";

export default function FormatCurrentDate(props) {
  let time = new Date(props.date * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];

  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes}{" "}
    </div>
  );
}
