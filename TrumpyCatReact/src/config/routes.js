import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from '../Home';
import Main from '../Main';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
