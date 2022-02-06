import React from "react";
import "./App.css";
import ButtonAurora from "./ButtonAurora";
import FormSkeleton from "./FormSkeleton";
import OptionalLocations from "./OptionalLocations";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

function App() {
  return (
    <div>
      <ButtonAurora />
      <form>
        <FormSkeleton />
        <OptionalLocations />
        <div className="ActualInformation">
          <div className=" row">
            <div className="col-8 first-collumn">
              <div className="col default-chosen-city">
                <div id="weather-description"> Overcast Clouds</div>
                <div id="current-city" className="current-city">
                  Trondheim
                </div>
              </div>
              <div className="col">
                <div className="degree-and-icon">
                  <span id="degrees-city"> 0 </span>
                  <span className="degrees">
                    <a href="#" id="celcius" className=" f-c-change">
                      °C
                    </a>
                    |
                    <a href="#" id="fahrenheit">
                      °F
                    </a>
                  </span>
                  <i className="wi wi-day-cloudy" id="main-icon"></i>
                </div>
              </div>
            </div>

            <div className="col-2 extra-description">
              <span className="time"> Time:</span>
              <div className="apparent-description pt-3">
                <div className="col pb-1">
                  <strong>Max/</strong>Min:
                </div>
                <div className="col pb-1">Percieved:</div>
                <div className="col pb-1">Humidity:</div>
                <div className="col pb-1">Wind:</div>
              </div>
            </div>

            <div className="col-2 extra-values">
              <span id="date-today"> 07.02</span>
              <div className="apparent-description pt-3">
                <span className="col">
                  <span id="max">
                    <strong>2</strong>
                  </span>
                  °/<span id="min"></span>-3°
                </span>
                <div className="space pt-1"></div>
                <span className="col" id="percieved">
                  - 1
                </span>
                °<div className="space pt-1"></div>
                <span className="col" id="humidity"></span> 25<span>%</span>
                <div className="space pt-1"></div>
                <span className="col" id="wind"></span>15 <span>m/s</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hourly-title">Hourly Forecast</div>
        <div className="scrolling-wrapper">
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
        </div>
        <div className="forecast-boxes">
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
        </div>
      </form>

      <div className="coded-by">
        <p>
          <a
            href="https://github.com/sunnivaunsgaard/React-weatherApp"
            target="_blank"
          >
            open-source code
          </a>
          , Coded by Sunniva Unsgård
        </p>
      </div>
    </div>
  );
}

export default App;
