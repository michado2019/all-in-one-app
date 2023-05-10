import React from "react";
import "./CurrentWeather.css";
const CurrentWeather = ({ currentWeather }) => {
  
  return (
    <div className="currentWeather-wrapper">
      <div className="currentWeather-content">
        <div className="currentWeather-content_top">
          <div className="currentWeather-content_top1">
            <div className="currentWeather-content_top1_1">
              <h2 className="currentWeather-content_top1_city">
                {currentWeather?.city}
              </h2>
              <p className="currentWeather-content_top1_sunny">
                {currentWeather?.weather[0].description}
              </p>
            </div>
          </div>
          <div className="currentWeather-content_top2">
            <img
              src={`/icons/${currentWeather?.weather[0].icon}.png`}
              alt="img"
              className="currentWeather-sunImg"
            />
          </div>
        </div>
        <div className="currentWeather-content_down">
          <h2 className="currentWeather-content_down1">
            {Math.round(currentWeather?.main.temp)}°C
          </h2>
          <div className="currentWeather-content_down2">
            <h4 className="currentWeather-content_downTitle">Details</h4>
            <p className="currentWeather-content_downParams">
              Feels like
              <span className="currentWeather-params">
                {currentWeather?.main.feels_like}°C
              </span>
            </p>
            <p className="currentWeather-content_downParams">
              Wind
              <span
                className="currentWeather-params"
                id="currentWeather-params"
              >
                {currentWeather?.wind.speed}
              </span>
            </p>
            <p className="currentWeather-content_downParams">
              Humidity
              <span className="currentWeather-params">
                {currentWeather?.main.humidity}%
              </span>
            </p>
            <p className="currentWeather-content_downParams">
              Pressure
              <span className="currentWeather-params" id="currentWeather-param">
                {currentWeather?.main.humidity}hPa
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
