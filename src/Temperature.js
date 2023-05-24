import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature({ metric, onFahrClick }) {
  const [unit, setUnit] = useState(`metric`);

  //function showCels(event) {
  //event.preventDefault();
  //  setUnit(`metric`);
  //}

  //function showFahr(event) {
  //  event.preventDefault();
  //  setUnit();
  //}

  if (unit === `metric`) {
    return (
      <span className="Temperature">
        <span className="temp">{Math.round(metric)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={onFahrClick}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="temp">{Math.round(metric * 1.8 + 32)}</span>
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
