import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Landing() {
  return (
    <div class="content">
      <div class="landing">
        <h4>WeatherApp</h4>
      </div>
      <navbar>
        <ul class="navbar">
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
    </div>
  );
}
