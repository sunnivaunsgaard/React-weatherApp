import React from "react";
import "./App.css";
import ButtonAurora from "./ButtonAurora";
import FormSkeleton from "./FormSkeleton";
import OptionalLocations from "./OptionalLocations";
import HourlyForecast from "./HourlyForecast";

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
                <span id="current-city" className="current-city">
                  {" "}
                  Trondheim
                </span>
              </div>
              <div className="col">
                <span id="degrees-city"> 0 </span>
                <span className="f-c">
                  <a href="#" id="celcius">
                    {" "}
                    °C{" "}
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit">
                    {" "}
                    °F
                  </a>
                </span>
                <i className="wi wi-day-cloudy" id="main-icon">
                  {" "}
                </i>
              </div>
            </div>

            <div className="col-2 extra-description">
              <span className="time"> Time:</span>
              <div className="apparent-description">
                <div className="col">
                  <strong>Max </strong>Min:{" "}
                </div>
                <div className="col">Percieved:</div>
                <div className="col">Humidity:</div>
                <div className="col">Wind:</div>
              </div>
            </div>

            <div className="col-2 extra-values">
              <span id="date-today"> 7.2.2022 </span>
              <div className="apparent-description">
                <span className="col">
                  {" "}
                  <span id="max">
                    <strong>2</strong>
                  </span>
                  ° <span id="min">-3</span>°
                </span>
                <div class="space"></div>
                <span class="col" id="percieved">
                  {" "}
                </span>{" "}
                °<div className="space"></div>
                <span className="col" id="humidity"></span> <span>%</span>
                <div className="space"></div>
                <span className="col" id="wind"></span> <span>km/h</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hourly-title">Hourly Forecast</div>
        <span>
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
          <HourlyForecast />
        </span>
      </form>
    </div>
  );
}

export default App;
