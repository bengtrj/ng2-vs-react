'use strict';

import React from "react";
import {browserHistory, IndexRoute, Route, Router} from "react-router";

import Main from "./pages/main.jsx";
import App from "./pages/app.jsx";
import NotFound from "./pages/notFound.jsx";

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ Main }>
      <IndexRoute component={ App }/>
      <Route path='home' component={ App } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;