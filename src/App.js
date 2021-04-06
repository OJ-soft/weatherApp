import React, { useState } from "react";
import keys from "./keys";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Day from "./day";
import Now from "./Now";
import Mday from "./mday";
import Landing from "./Landing";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  return (
    <Router>
      <body>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/landing" component={Landing} />
          <Route path="/day" component={Day} />
          <Route path="/Now" component={Now} />
          <Route path="/mday" component={Mday} />
        </Switch>

        <div class="footer">
          <h3>
            Literaly <b>PERFECT</b> website
          </h3>
        </div>
      </body>
    </Router>
  );
}

export default App;
