import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return(
    <Route
      path={path}
      exact={exact}
      render={props => (
        !loggedIn ? <Component {...props} /> : <Redirect to="/" /> 
      )}
    />
  )
};


const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      !loggedIn ? <Redirect to='/login' /> : <Component {...props} />
    )}
  />
);


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);


