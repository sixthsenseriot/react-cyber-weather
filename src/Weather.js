import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = `bc2cd97eaa209e7d22d8f3c84081655f`;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
      <div className="Weather">
        <p>
          {" "}
          The weather in {props.city} is {Math.round(temperature)}°C
        </p>
      </div>
    );
  } else {
    return <p>Loading temperature for {props.city}...</p>;
  }
}
