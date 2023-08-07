import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <i class="fa-solid fa-sun"></i>,
    "01n": <i class="fa-solid fa-sun"></i>,
    "02d": <i class="fa-solid fa-cloud-sun"></i>,
    "02n": <i class="fa-solid fa-cloud-moon"></i>,
    "03d": <i class="fa-solid fa-cloud"></i>,
    "03n": <i class="fa-solid fa-cloud"></i>,
    "04d": <i class="fa-solid fa-cloud"></i>,
    "04n": <i class="fa-solid fa-cloud"></i>,
    "09d": <i class="fa-solid fa-cloud-showers-heavy"></i>,
    "09n": <i class="fa-solid fa-cloud-showers-heavy"></i>,
    "10d": <i class="fa-solid fa-cloud-sun-rain"></i>,
    "10n": <i class="fa-solid fa-cloud-moon-rain"></i>,
    "11d": <i class="fa-solid fa-cloud-bolt"></i>,
    "11n": <i class="fa-solid fa-cloud-bolt"></i>,
    "13d": <i class="fa-regular fa-snowflake"></i>,
    "13n": <i class="fa-regular fa-snowflake"></i>,
    "50d": <i class="fa-solid fa-bars-staggered"></i>,
    "50n": <i class="fa-solid fa-bars-staggered"></i>,
  };
  return codeMapping[props.code];
}
