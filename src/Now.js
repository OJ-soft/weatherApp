import React, { useState } from "react";
import keys from "./keys";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Now() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div class="content">
      <main>
        <top>
          <div class="top-content">
            <div class="top-text">
              <h1>WeatherApp</h1>
              <h2>
                made by <b>Mikołaj</b> and <b>Olek</b>
                <p>&nbsp;</p>{" "}
              </h2>
            </div>
          </div>
        </top>

        <navbar>
          <ul class="navbar">
            <li>
              <Link to="/Landing">Home</Link>
            </li>
            <li>
              <Link to="/Now">Now</Link>
            </li>
            <li>
              <Link to="/day">24 hours</Link>
            </li>
            <li>
              <Link to="/mday">5 day</Link>
            </li>
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
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Now;
