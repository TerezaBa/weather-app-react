import React, { useContext } from "react";

import "./Temperature.css";
import { UnitSwitchContext } from "./UnitSwitchContext";

export default function Temperature(props) {
  const { value, setValue } = useContext(UnitSwitchContext);

  function showCels(event) {
    event.preventDefault();
    setValue(`metric`);
  }

  function showFahr(event) {
    event.preventDefault();
    setValue();
  }

  if (value === `metric`) {
    return (
      <span className="Temperature">
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
      <span className="Temperature">
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
