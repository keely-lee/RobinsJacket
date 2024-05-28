import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return(
    <Route
      path={path}
      exact={exact}
      render={props => (
        !loggedIn ? <Component {...props} /> : <Navigate to="/"/> 
      )}
    />
  )
};

const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      !loggedIn ? <Navigate to='/login' replace/> : <Component {...props} />
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


