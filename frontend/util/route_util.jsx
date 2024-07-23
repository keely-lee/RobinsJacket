import React from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const Auth = ({ loggedIn }) => {
  return !loggedIn ? <Outlet /> : <Navigate to="/" />;
};

const Protected = ({ loggedIn, props }) => {
  return !loggedIn ? <Navigate to="/login" replace /> : <Outlet {...props} />;
};

// const Protected = ({ loggedIn, path, component: Component, exact }) => (
//   <Route
//     exact={exact}
//     path={path}
//     render={props => !loggedIn ? <Navigate to='/login' replace/> : <Component {...props} />}
//   />
// );

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUserId),
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
