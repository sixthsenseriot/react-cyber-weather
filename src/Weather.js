import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      cloudiness: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="text-center">WEATHER FORECAST</h1>
        <div className="container weather-app-container">
          <div className="search-container d-flex justify-content-center pt-3">
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Where to?"
                className="city-input mr-1"
                autoComplete="off"
                onChange={handleCityChange}
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
          <WeatherForecast coordinates={weatherData.coordinates} />
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
    search();
    return <h1>Loading...</h1>;
  }
}
