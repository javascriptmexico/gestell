import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Fourth = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './fourth')
);

const FourthMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/fourth`} />
      <Route
        path={`${match.url}/fourth`}
        render={props => <Fourth {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default FourthMenu;
