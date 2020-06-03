import React from 'react';
import GreetingContainer from './greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h3>RobinsJacket, let's get started!</h3>
        <GreetingContainer />
      </header>

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />

    </div>
    //routes will go in the div tags
  )
}

export default App;