import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trendings from '../pages/Trendings';
import MovieDetails from '../pages/MovieDetails';
import SearchResults from '../pages/SearchResults';
import ErrorPage from '../pages/ErrorPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Trendings} />
    <Route path="/movies/:id" component={MovieDetails} />
    <Route path="/search" component={SearchResults} />
    <Route path="*" component={ErrorPage} />
  </Switch>
);

export default Routes;
