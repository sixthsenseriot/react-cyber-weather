import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      cloudiness: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="text-center">WEATHER FORECAST</h1>
        <div className="container weather-app-container">
          <div className="search-container d-flex justify-content-center pt-3">
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
          <WeatherInfo data={weatherData} />
        </div>

        <div className="container created-by-container">
          <p className="created-by">
            <a
              href="https://github.com/sixthsenseriot/react-cyber-weather"
              title="GitHub repository link"
              target="_blank"
              rel="noopener noreferrer"
              className="code-link"
            >
              <u>Open-source code</u>
            </a>{" "}
            by Khanh Nguyen
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
