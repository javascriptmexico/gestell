import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Third = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './third')
);
const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/third`} />
      <Route
        path={`${match.url}/third`}
        render={props => <Third {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
