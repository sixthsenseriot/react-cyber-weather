import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <>
        <div className="forecast-container d-flex justify-content-center">
          <div className="row">
            <div className="col forecast-col forecast-one text-center">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
