import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CircularProgress from '@material-ui/core/CircularProgress';

const Twitter = lazy(() => import(/* webpackChunkName: 'twitter' */ './Twitter'));

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route component={Twitter} />
      </Switch>
    </Suspense>
  </Router>
);
