import React from "react";
import "./HourlyForecast.css";

export default function HourlyForecast () {

    return (

<div className = "HourlyForecast">
            <div className="scrolling-wrapper" id="inner-hourly-forecast">
            <div class="box1 "> 
                <span id="tomorrow">Date</span>
            <div className="child-box"> 3 ° 
                <span> <i className = "wi wi-day-sunny"id="first-icon"> </i></span>
                </div>
                </div>
            <div id = "more-info1"> 
                <ul>
                <li className= "info-max-min">
                <strong><span id="info1-max"> 5°</span></strong> 
                <span id="info1-min"> 0°
                </span>
                      </li>
                <li class="info-percieved"> Percieved: <span id="info1-percieved"> 0 °
                </span> 
                      </li>
               <li class="info-humidity"> Humidity: <span id="info1-humidity">20</span> %
                     </li>
               <li class="info-wind"> Wind: <span id="info1-wind">25</span> m/h
                     </li>
                     </ul> 
                 </div>
                 </div>
            
</div>);

}