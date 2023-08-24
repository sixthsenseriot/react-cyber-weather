import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main-weather-container px-4 pb-3">
        <h2 className="city mt-3">
          {props.data.city} {""}
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
        </h2>
        <p className="weather-date">
          <FormattedDate date={props.data.date} />
        </p>
        <p className="weather-description">{props.data.description}</p>

        <div className="weather-container d-flex justify-content-center align-items-center">
          <div className="main-weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>

          <WeatherTemperature fahrenheit={props.data.temperature} />

          <div className="vertical-line"></div>
          <div>
            <p className="weather-extra">
              Cloudiness: {props.data.cloudiness}%
            </p>
            <p className="weather-extra">Humidity: {props.data.humidity}%</p>
            <p className="weather-extra">
              Wind: {Math.round(props.data.wind)} mph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
