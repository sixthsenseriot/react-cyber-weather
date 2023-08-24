import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <>
      <p className="day-one forecast-day">{day()}</p>
      <div className="day-one-icon forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <p className="day-one-temp forecast-temp d-flex">
        <span className="temp-max">{maxTemperature()}</span>
        <span className="temp-div">|</span>
        <span className="temp-min">{minTemperature()}</span>
      </p>
    </>
  );
}
