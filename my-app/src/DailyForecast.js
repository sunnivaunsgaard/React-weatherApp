import React from "react";
import "./DailyForecast.css";

export default function DailyForecast () {

    return (
      <div className="DailyForecast">
        <div className="scroll-bar" id="scroll-daily-forecast">
          <div className="box1">
            <div id="tomorrow"> TOMORROW </div>
            <div className="child-box">
              4°
              <span>
                <i className="wi wi-day-sunny" id="first-icon"></i>
              </span>
            </div>
          </div>
          <div id="more-info1">
            <ul>
              <li className="info-max-min">
                <strong>
                  <span id="info1-max">5 °</span>
                </strong>{" "}
                <span id="info1-min">0 °</span>
              </li>
              <li className="info-percieved">
                Percieved: <span id="info1-percieved"> -1°</span>
              </li>
              <li className="info-humidity">
                Humidity: <span id="info1-humidity">15</span> %
              </li>
              <li className="info-wind">
                {" "}
                Wind: <span id="info1-wind">30</span> m/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

}