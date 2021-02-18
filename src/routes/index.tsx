import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" component={MovieDetails} />
  </Switch>
);

export default Routes;
