import React from 'react';
import GreetingContainer from './greeting/GreetingContainer';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from "../util/route_util"
import SplashContainer from './splash/splash_container'
import UserHomeContainer from './user_home/user_home_container';
import LoremIpsum from './splash/lorem_ipsum';
import Modal from './modal/modal';
import UserPortfolioStock from './user_portfolio/user_portfolio_stock';

const App = () => {
  return (
    <div>
      <Modal/>
      <header>
        {/* <h3>RobinsJacket, let's get started!</h3> */}
        <GreetingContainer />
      </header> 

      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/loremips" component={LoremIpsum} />
        <Route path="/stock/:id" component={UserPortfolioStock} />

      </Switch>
    </div>
  )
}

export default App;