import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "views-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const ThirdMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './third-menu')
);
const FourthMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './fourth-menu')
);
const FifthMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './fifth-menu')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
              <Route
                path={`${match.url}/gogo`}
                render={props => <Gogo {...props} />}
              />
              <Route
                path={`${match.url}/second-menu`}
                render={props => <SecondMenu {...props} />}
              />
              <Route
                path={`${match.url}/third-menu`}
                render={props => <ThirdMenu {...props} />}
              />
              <Route
                path={`${match.url}/fourth-menu`}
                render={props => <FourthMenu {...props} />}
              />
              <Route
                path={`${match.url}/fifth-menu`}
                render={props => <FifthMenu {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
