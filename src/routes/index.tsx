import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trendings from '../pages/Trendings';
import MovieDetails from '../pages/MovieDetails';
import SearchResults from '../pages/SearchResults';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Trendings} />
    <Route path="/movies/:id" exact component={MovieDetails} />
    <Route path="/search" component={SearchResults} />
  </Switch>
);

export default Routes;
