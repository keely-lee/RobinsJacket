import React from 'react';
import GreetingContainer from './greeting/GreetingContainer';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from "../util/route_util"
import SplashContainer from './splash/splash_container'

const App = () => {
  return (
    <div>
      <header>
        {/* <h3>RobinsJacket, let's get started!</h3> */}
        <GreetingContainer />
      </header>

      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  )
}

export default App;