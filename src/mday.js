import React, { useState } from "react";
import keys from "./keys";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const Time = (a) => {
  var h = new Date();
  h = h.getHours();

  var t1 = h%3
  h = h -t1
  h = h/3
  h = 8 - h
  h = h + a
  return h;
};

const Hour = (a) => {
  var h = new Date();
  h = h.getHours();

  var t1 = h%3
  h = h -t1
  h = h + a
  return h;
};

const Day = (a) => {
  var d = new Date()
  d = d.getDay()

  var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return week[d+a]
}

var weatherplot = []
var trace1
var trace2

function Mday() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [metadata, setMetadata] = useState("");
  const [weather, setWeather] = useState([]);
  const search = (e) => {
    if (e.key === "Enter" && query !== "") {
      fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.status !== 200){
            setQuery("");
            setMetadata(result)
            setWeather([result.list[0], result.list[1], result.list[2], result.list[3], result.list[4], result.list[5], result.list[6], result.list[7], result.list[8], result.list[9], result.list[10], result.list[11], result.list[12], result.list[13], result.list[14], result.list[15], result.list[16], result.list[17], result.list[18], result.list[19], result.list[20], result.list[21], result.list[22], result.list[23], result.list[24], result.list[25], result.list[26], result.list[27], result.list[28], result.list[29], result.list[30], result.list[31], result.list[32], result.list[33], result.list[34], result.list[35], result.list[36], result.list[37], result.list[38], result.list[39]]);
            console.log(result);
          };
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
            <h2>made by <b>Mikołaj</b> and <b>Olek</b><p>&nbsp;</p> </h2>
          </div>
        </div>
      </top>

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

      {weather.length !== 0 && typeof weather.main != "undefined"? (
        <div>
        <div className="location-container">
          <div className="location">
              {metadata.city.name}, {metadata.city.country}
          </div>
          <div className="date"> {dateBuild(0)}</div>
        </div>

        <div className="temperature-plot"><Plot
          data={[
            trace1= {
              x: Array.from({length: 40}, (_, i) => i + 1),
              y: [Math.round(weather[0].main.temp), Math.round(weather[1].main.temp), Math.round(weather[2].main.temp), Math.round(weather[3].main.temp), Math.round(weather[4].main.temp), Math.round(weather[5].main.temp), Math.round(weather[6].main.temp), Math.round(weather[7].main.temp), Math.round(weather[8].main.temp), Math.round(weather[9].main.temp), Math.round(weather[10].main.temp), Math.round(weather[11].main.temp), Math.round(weather[12].main.temp), Math.round(weather[13].main.temp), Math.round(weather[14].main.temp), Math.round(weather[15].main.temp), Math.round(weather[16].main.temp), Math.round(weather[17].main.temp), Math.round(weather[18].main.temp), Math.round(weather[19].main.temp), Math.round(weather[20].main.temp), Math.round(weather[21].main.temp), Math.round(weather[22].main.temp), Math.round(weather[23].main.temp), Math.round(weather[25].main.temp), Math.round(weather[26].main.temp), Math.round(weather[27].main.temp), Math.round(weather[28].main.temp), Math.round(weather[29].main.temp), Math.round(weather[30].main.temp), Math.round(weather[31].main.temp), Math.round(weather[32].main.temp), Math.round(weather[33].main.temp), Math.round(weather[34].main.temp), Math.round(weather[35].main.temp), Math.round(weather[36].main.temp), Math.round(weather[37].main.temp), Math.round(weather[38].main.temp), Math.round(weather[39].main.temp)],
              name: 'Temperature',
              mode: 'lines',
              marker: {color: 'red'},
              align: 'center',
            },
            trace2= {
              x: Array.from({length: 40}, (_, i) => i + 1),
              y: [Math.round(weather[0].main.feels_like), Math.round(weather[1].main.feels_like), Math.round(weather[2].main.feels_like), Math.round(weather[3].main.feels_like), Math.round(weather[4].main.feels_like), Math.round(weather[5].main.feels_like), Math.round(weather[6].main.feels_like), Math.round(weather[7].main.feels_like), Math.round(weather[8].main.feels_like), Math.round(weather[9].main.feels_like), Math.round(weather[10].main.feels_like), Math.round(weather[11].main.feels_like), Math.round(weather[12].main.feels_like), Math.round(weather[13].main.feels_like), Math.round(weather[14].main.feels_like), Math.round(weather[15].main.feels_like), Math.round(weather[16].main.feels_like), Math.round(weather[17].main.feels_like), Math.round(weather[18].main.feels_like), Math.round(weather[19].main.feels_like), Math.round(weather[20].main.feels_like), Math.round(weather[21].main.feels_like), Math.round(weather[22].main.feels_like), Math.round(weather[23].main.feels_like), Math.round(weather[25].main.feels_like), Math.round(weather[26].main.feels_like), Math.round(weather[27].main.feels_like), Math.round(weather[28].main.feels_like), Math.round(weather[29].main.feels_like), Math.round(weather[30].main.feels_like), Math.round(weather[31].main.feels_like), Math.round(weather[32].main.feels_like), Math.round(weather[33].main.feels_like), Math.round(weather[34].main.feels_like), Math.round(weather[35].main.feels_like), Math.round(weather[36].main.feels_like), Math.round(weather[37].main.feels_like), Math.round(weather[38].main.feels_like), Math.round(weather[39].main.feels_like)],
              name: 'Sensed temperature',
              mode: 'lines',
              marker: {color: 'blue'},
              align: 'center',
            },
          ]}
          layout={{
            width: 1200,
            height: 400,
            plot_bgcolor: '#e3e3e3',
            showlegend: true,
            xaxis: {tickvals:[Time(0), Time(8), Time(16), Time(24), Time(32), Time(40)], ticktext:[Day(0), Day(1), Day(2), Day(3), Day(4)]},
            yaxis: {tickvals:[-20, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35], ticktext:['-20°C','-10°C','-5°C', '0°C', '5°C', '10°C', '15°C', '20°C', '25°C', '30°C', '35°C']},
            legend: {
              x: 1,
              y: 0,
              xanchor: 'right',
              bgcolor: '#e3e3e3',
            },
          }}
          config={{displayModeBar: false}}
        /></div>

        <div className="pressure-plot"><Plot
          data={[
            trace1= {
              x: Array.from({length: 40}, (_, i) => i + 1),
              y: [weather[0].main.pressure, weather[1].main.pressure, weather[2].main.pressure, weather[3].main.pressure, weather[4].main.pressure, weather[5].main.pressure, weather[6].main.pressure, weather[7].main.pressure, weather[8].main.pressure, weather[9].main.pressure, weather[10].main.pressure, weather[11].main.pressure, weather[12].main.pressure, weather[13].main.pressure, weather[14].main.pressure, weather[15].main.pressure, weather[16].main.pressure, weather[17].main.pressure, weather[18].main.pressure, weather[19].main.pressure, weather[20].main.pressure, weather[21].main.pressure, weather[22].main.pressure, weather[23].main.pressure, weather[24].main.pressure, weather[25].main.pressure, weather[26].main.pressure, weather[27].main.pressure, weather[28].main.pressure, weather[29].main.pressure, weather[30].main.pressure, weather[31].main.pressure, weather[32].main.pressure, weather[33].main.pressure, weather[34].main.pressure, weather[35].main.pressure, weather[36].main.pressure, weather[37].main.pressure, weather[38].main.pressure, weather[39].main.pressure],
              name: 'Pressure',
              mode: 'lines',
              marker: {color: 'red'},
              align: 'center',
            }
          ]}
          layout={{
            width: 1200,
            height: 300,
            plot_bgcolor: '#e3e3e3',
            showlegend: true,
            xaxis: {tickvals:[Time(0), Time(8), Time(16), Time(24), Time(32), Time(40)], ticktext:[Day(0), Day(1), Day(2), Day(3), Day(4)]},
            legend: {
              x: 1,
              y: 0,
              xanchor: 'right',
              bgcolor: '#e3e3e3',
            },
            margin: {t:20}
          }}
          config={{displayModeBar: false}}
        /></div>

        <div className="rain-plot"><Plot
          data={[
            trace1= {
              x: Array.from({length: 40}, (_, i) => i + 1),
              y: [weather[0].pop, weather[1].main.pop, weather[2].main.pop, weather[3].pop, weather[4].pop, weather[5].pop, weather[6].pop, weather[7].pop, weather[8].pop, weather[9].pop, weather[10].pop, weather[11].pop, weather[12].pop, weather[13].pop, weather[14].pop, weather[15].pop, weather[16].pop, weather[17].pop, weather[18].pop, weather[19].pop, weather[20].pop, weather[21].pop, weather[22].pop, weather[23].pop, weather[24].pop, weather[25].pop, weather[26].pop, weather[27].pop, weather[28].pop, weather[29].pop, weather[30].pop, weather[31].pop, weather[32].pop, weather[33].pop, weather[34].pop, weather[35].pop, weather[36].pop, weather[37].pop, weather[38].pop, weather[39].pop],
              name: 'Probability of rain',
              mode: 'lines',
              marker: {color: 'red'},
              align: 'center',
            }
          ]}
          layout={{
            width: 1200,
            height: 300,
            plot_bgcolor: '#e3e3e3',
            showlegend: true,
            xaxis: {tickvals:[Time(0), Time(8), Time(16), Time(24), Time(32), Time(40)], ticktext:[Day(0), Day(1), Day(2), Day(3), Day(4)]},
            legend: {
              x: 1,
              y: 0,
              xanchor: 'right',
              bgcolor: '#e3e3e3',
            },
            margin: {t:20}
          }}
          config={{displayModeBar: false}}
        /></div>

      </div> 
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Mday;