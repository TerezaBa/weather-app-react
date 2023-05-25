import React, { useContext } from "react";

import "./Temperature.css";
import { UnitSwitchContext } from "./UnitSwitchContext";

export default function Temperature(props) {
  const { value, setValue } = useContext(UnitSwitchContext);

  function tempCels() {
    let tempCels = Math.round(props.metric);
    return tempCels;
  }

  function tempFahr() {
    let tempFahr = Math.round(props.metric * 1.8 + 32);
    return tempFahr;
  }

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
        <span className="temp">{tempCels()}</span>
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
        <span className="temp">{tempFahr()}</span>
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
