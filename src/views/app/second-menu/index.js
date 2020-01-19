import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Second = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './second')
);
const Seconduno = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './seconduno')
);
const Seconddos = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './seconddos')
);
const Secondtres = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './secondtres')
);
const Secondcuatro = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './secondcuatro')
);
const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/second`} />
      <Route
        path={`${match.url}/second`}
        render={props => <Second {...props} />}
      />
      <Route
        path={`${match.url}/seconduno`}
        render={props => <Seconduno {...props} />}
      />
      <Route
        path={`${match.url}/seconddos`}
        render={props => <Seconddos {...props} />}
      />
      <Route
        path={`${match.url}/secondtres`}
        render={props => <Secondtres {...props} />}
      />
      <Route
        path={`${match.url}/secondcuatro`}
        render={props => <Secondcuatro {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
