import React from "react";
import "./App.css";
import ButtonAurora from "./ButtonAurora";
import FormSkeleton from "./FormSkeleton";
import OptionalLocations from "./OptionalLocations";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WeatherInformation from "./WeatherInformation";

function App() {
  return (
    <div>
      <ButtonAurora />
      <form>
        <FormSkeleton />
        <OptionalLocations />
        <WeatherInformation />
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
            rel="noreferrer"
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
