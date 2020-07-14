import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));

export default () => (
  <Suspense fallback={null}>
    <Switch>
      <Route component={Top} />
    </Switch>
  </Suspense>
);
