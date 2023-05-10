import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function showCels(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <span>
        <span className="temp">{Math.round(props.metric)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temp">{Math.round(props.metric * 1.8 + 32)}</span>
        <span className="units">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
