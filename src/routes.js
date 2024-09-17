import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Container/Home'
import Project from './Container/Users'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
      </Switch>
    </Router>
  )
}

export default Routes