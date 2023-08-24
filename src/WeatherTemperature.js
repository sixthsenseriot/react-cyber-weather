import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <h2 className="main-temp">{Math.round(props.fahrenheit)}</h2>
      </div>
      <div className="temp-conversion">
        <a href="/" className="fahrenheit-link">
          °F
        </a>
      </div>
    </div>
  );
}
