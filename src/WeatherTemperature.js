import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius() {
    return (props.fahrenheit - 32) * (5 / 9);
  }

  if (unit === "fahrenheit") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2 className="main-temp">{Math.round(props.fahrenheit)}</h2>
        </div>
        <div className="temp-conversion">
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>{" "}
          |{" "}
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2 className="main-temp">{Math.round(celsius())}</h2>
        </div>
        <div className="temp-conversion">
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>{" "}
          |{" "}
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>
        </div>
      </div>
    );
  }
}
