import React, { lazy } from "react";
const UserHomeContainer = lazy(() => import("../user_home/user_home_container"));
const SplashContainer = lazy(() => import("../splash/splash_container"));
// import SplashContainer from "../splash/splash_container";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.currentUser ? (
      <UserHomeContainer ownProps={this.props.ownProps} />
    ) : (
      <SplashContainer />
    );
  }
}

export default Greeting;
