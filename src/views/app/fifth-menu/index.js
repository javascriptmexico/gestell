import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Fifth = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './fifth')
);

const FourthMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/fifth`} />
      <Route
        path={`${match.url}/fifth`}
        render={props => <Fifth {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default FourthMenu;
