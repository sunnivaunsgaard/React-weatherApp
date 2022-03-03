import React, {useState} from "react";
import axios from "axios";
import "./App.css"; 


export default function WeatherInformation()
{ const [weather, setWeather] = useState({});

    let city = "Trondheim";

function findWeather (response) {
setWeather({
temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
  description: response.data.weather[0].description,
  perceived: response.data.main.feels_like,
  temp_min: response.data.main.temp_min,
  temp_max: response.data.main.temp_max,
  icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
});
}
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f48b6dfe797199e7d519f7a2a31290f3
&units=metric`;
axios.get(apiUrl).then(findWeather);
console.log(apiUrl);

return (
  <div>
    <div className="ActualInformation">
      <div className=" row">
        <div className="col-8 first-collumn">
          <div className="col default-chosen-city">
            <div id="weather-description"> {weather.description}</div>
            <div id="current-city" className="current-city">
              {city}
            </div>
          </div>
          <div className="col">
            <div className="degree-and-icon">
              <span id="degrees-city"> {Math.round(weather.temperature)} </span>
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
                <strong>{Math.round(weather.temp_max)}</strong>
              </span>
              °/<span id="min"></span>
              {Math.round(weather.temp_min)}°
            </span>
            <div className="space pt-1"></div>
            <span className="col" id="percieved">
              {weather.perceived}
            </span>
            °<div className="space pt-1"></div>
            <span className="col" id="humidity"></span> {weather.humidity}
            <span>%</span>
            <div className="space pt-1"></div>
            <span className="col" id="wind"></span>
            {Math.round(weather.wind)} <span>m/s</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);


}