import React from "react";
import FormattedDate from "./FormattedDate";

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
        <p className="weather-description text-capitalize">
          {props.data.description}
        </p>

        <div className="weather-container d-flex justify-content-center align-items-center">
          <div className="main-weather-icon">
            <i className="fa-solid fa-sun"></i>
          </div>
          <h2 className="main-temp">{Math.round(props.data.temperature)}</h2>
          <div className="temp-conversion">
            <a href="/" className="fahrenheit-link">
              °F
            </a>{" "}
            |{" "}
            <a href="/" className="celsius-link">
              °C
            </a>
          </div>
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

      <div className="forecast-container d-flex justify-content-center">
        <div className="row">
          <div className="col forecast-col forecast-one text-center">
            <p className="day-one forecast-day">MON</p>
            <div className="day-one-icon forecast-icon">
              <i className="fa-solid fa-sun"></i>
            </div>
            <p className="day-one-temp forecast-temp d-flex">
              <span>100°</span>
              <span className="temp-div">|</span>
              <span>100°</span>
            </p>
          </div>
          <div className="col line-container">
            <div className="vert-line"></div>
          </div>
          <div className="col forecast-col forecast-two text-center">
            <p className="day-two forecast-day">TUE</p>
            <div className="day-two-icon forecast-icon">
              <i className="fa-solid fa-sun"></i>
            </div>
            <p className="day-two-temp forecast-temp">
              <span>100°</span>
              <span className="temp-div">|</span>
              <span>100°</span>
            </p>
          </div>
          <div className="col line-container">
            <div className="vert-line"></div>
          </div>
          <div className="col forecast-col forecast-three text-center">
            <p className="day-three forecast-day">WED</p>
            <div className="day-three-icon forecast-icon">
              <i className="fa-solid fa-sun"></i>
            </div>
            <p className="day-three-temp forecast-temp">
              <span>100°</span>
              <span className="temp-div">|</span>
              <span>100°</span>
            </p>
          </div>
          <div className="col line-container hide-line-small">
            <div className="vert-line"></div>
          </div>
          <div className="col forecast-col forecast-four text-center">
            <p className="day-four forecast-day">THU</p>
            <div className="day-four-icon forecast-icon">
              <i className="fa-solid fa-sun"></i>
            </div>
            <p className="day-four-temp forecast-temp">
              <span>100°</span>
              <span className="temp-div">|</span>
              <span>100°</span>
            </p>
          </div>
          <div className="col line-container hide-line">
            <div className="vert-line hide-line"></div>
          </div>
          <div className="col forecast-col forecast-five text-center">
            <p className="day-five forecast-day">FRI</p>
            <div className="day-five-icon forecast-icon">
              <i className="fa-solid fa-sun"></i>
            </div>
            <p className="day-five-temp forecast-temp">
              <span>100°</span>
              <span className="temp-div">|</span>
              <span>100°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
