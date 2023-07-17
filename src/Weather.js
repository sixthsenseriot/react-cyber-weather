import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    date: (
      <span>
        <strong>Friday</strong> 05:00:00 AM
      </span>
    ),
    description: "Clear skies",
    temperature: 77,
    icon: <i className="fa-solid fa-sun"></i>,
    cloudiness: 0,
    humidity: 0,
    wind: 0,
  };

  return (
    <div className="Weather">
      <h1 className="text-center">WEATHER FORECAST</h1>
      <div className="container weather-app-container">
        <div className="main-weather-container px-4 py-3">
          <div className="search-container d-flex justify-content-center">
            <form className="search-bar">
              <input
                type="text"
                placeholder="Where to?"
                className="city-input mr-1"
                autoComplete="off"
              />
              <button className="mr-1" type="submit">
                SEARCH
              </button>
              <button type="button" className="location-button">
                <i className="location-icon fa-solid fa-location-crosshairs"></i>
              </button>
            </form>
          </div>

          <h2 className="city mt-3">
            {weatherData.city}{" "}
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
          </h2>
          <p className="weather-date">{weatherData.date}</p>
          <p className="weather-description">{weatherData.description}</p>

          <div className="weather-container d-flex justify-content-center align-items-center">
            <div className="main-weather-icon">{weatherData.icon}</div>
            <h2 className="main-temp">{weatherData.temperature}</h2>
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
                Cloudiness: {weatherData.cloudiness}%
              </p>
              <p className="weather-extra">Humidity: {weatherData.humidity}%</p>
              <p className="weather-extra">Wind: {weatherData.wind} mph</p>
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

      <div className="container created-by-container">
        <p className="created-by">
          <a
            href="/https://github.com/sixthsenseriot/cyber-weather-app"
            title="GitHub repository link"
            target="_blank"
            className="code-link"
          >
            <u>Open-source code</u>
          </a>{" "}
          by Khanh Nguyen
        </p>
      </div>
    </div>
  );
}
