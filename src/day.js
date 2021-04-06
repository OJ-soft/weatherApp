import React, { useState } from "react";
import keys from "./keys";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const Time = (a) => {
  var h = new Date();
  h = h.getHours();

  var t1 = h%3
  h = h -t1

  h = h + a 
  if(h > 24){
    h = h - 24
    h = "tomorow " + h
  }
  return h;
};

function Day() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [metadata, setMetadata] = useState("");
  const [weather, setWeather] = useState([]);
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setMetadata(result)
          setWeather([result.list[0], result.list[1], result.list[2], result.list[3], result.list[4], result.list[5], result.list[6], result.list[7], result.list[8]]);
          console.log(result);
        });
    }
  };

  return (
    <div>
      <main>

      <top>
        <div class="top-content">
          <div class="top-text">
            <h1>WeatherWebApp</h1>
            <h2>made by <b>Mikołaj</b> and <b>Olek</b><p>&nbsp;</p> </h2>
          </div>
          <div class="contentDiv">
            {/*<img class="arrow" url="./pics/arrow.jpg"/>*/}
          </div>
        </div>
      </top>

      <p id="demo"></p>

      <navbar>
        <ul class="navbar">
          <li><Link to="/Landing">Home</Link></li>
          <li><Link to="/Now">Now</Link></li>
          <li><Link to="/day">24 hours</Link></li>
          <li><Link to="/mday">5 day</Link></li>
        </ul>
      </navbar>

        <div className="search-container">
        <br></br>
          <h4>Enter where you want to check the weather at</h4>
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {weather.length !== 0 ? (
        <div>
          <div className="location-container">
            <div className="location">
              {metadata.city.name}, {metadata.city.country}
            </div>
            <div className="date"> {dateBuild(0)}</div>
          </div>
          <div class="container-flex">
            
            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(3)}.00</h5>
                {Math.round(weather[1].main.temp)}°C
              </div>
              <div className="weather">{weather[1].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(6)}.00</h5>
                {Math.round(weather[2].main.temp)}°C
              </div>
              <div className="weather">{weather[2].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(9)}.00</h5>
                {Math.round(weather[3].main.temp)}°C
              </div>
              <div className="weather">{weather[3].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(12)}.00</h5>
                {Math.round(weather[4].main.temp)}°C
              </div>
              <div className="weather">{weather[4].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(15)}.00</h5>
                {Math.round(weather[5].main.temp)}°C
              </div>
              <div className="weather">{weather[5].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(18)}.00</h5>
                {Math.round(weather[6].main.temp)}°C
              </div>
              <div className="weather">{weather[6].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(21)}.00</h5>
                {Math.round(weather[7].main.temp)}°C
              </div>
              <div className="weather">{weather[7].weather[0].main}</div>
            </div>

            <div className="weather-container">
              <div className="temperature">
              <h5>{Time(24)}.00</h5>
                {Math.round(weather[8].main.temp)}°C
              </div>
              <div className="weather">{weather[8].weather[0].main}</div>
            </div>
          </div>
          </div>  
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Day;