import React, { useState } from "react";

export default function Temperature(props) {
  const [temp, setTemp] = useState("metric");

  function showCels(event) {
    event.preventDefault();
    setTemp(props.metric);
  }

  function showFahr(event) {
    event.preventDefault();
    setTemp(props.metric * 1.8 + 32);
  }

  if ("metric") {
    return (
      <div>
        <span className="temp">{Math.round(props.metric)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(props.metric * 1.8 + 32)}</span>
        <span className="units">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
