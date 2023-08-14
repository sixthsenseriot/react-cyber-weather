import React from "react";

export default function WeatherForecast() {
  return (
    <>
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
    </>
  );
}
