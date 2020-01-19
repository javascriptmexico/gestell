import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Third = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './third')
);
const Thirduno = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './thirduno')
);
const Thirddos = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './thirddos')
);
const ThirdMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/third`} />
      <Route
        path={`${match.url}/third`}
        render={props => <Third {...props} />}
      />
      <Route
        path={`${match.url}/thirduno`}
        render={props => <Thirduno {...props} />}
      />
      <Route
        path={`${match.url}/thirddos`}
        render={props => <Thirddos {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default ThirdMenu;
