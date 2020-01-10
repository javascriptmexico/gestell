import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Rud = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './rud')
);
const Rut = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './rut')
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route
        path={`${match.url}/start`}
        render={props => <Start {...props} />}
      />
      <Route
        path={`${match.url}/rud`}
        render={props => <Rud {...props} />}
      />
      <Route
        path={`${match.url}/rut`}
        render={props => <Rut {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
