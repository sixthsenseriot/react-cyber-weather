import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <>
        <div className="forecast-container d-flex justify-content-center">
          <div className="row">
            <div className="col forecast-col forecast-one text-center">
              <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col line-container">
              <div className="vert-line"></div>
            </div>
            <div className="col forecast-col forecast-two text-center">
              <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col line-container">
              <div className="vert-line"></div>
            </div>
            <div className="col forecast-col forecast-three text-center">
              <WeatherForecastDay data={forecast[3]} />
            </div>
            <div className="col line-container hide-line-small">
              <div className="vert-line"></div>
            </div>
            <div className="col forecast-col forecast-four text-center">
              <WeatherForecastDay data={forecast[4]} />
            </div>
            <div className="col line-container hide-line">
              <div className="vert-line hide-line"></div>
            </div>
            <div className="col forecast-col forecast-five text-center">
              <WeatherForecastDay data={forecast[5]} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    loadForecast();

    return null;
  }
}
