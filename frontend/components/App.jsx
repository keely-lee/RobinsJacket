import React from 'react';
import GreetingContainer from './greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from "../util/route_util"

const App = () => {
  return (
    <div>
      <header>
        <h3>RobinsJacket, let's get started!</h3>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;