import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import Modal from './modal/modal';
import GreetingContainer from './greeting/GreetingContainer';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoremIpsum from './splash/lorem_ipsum';
import UserPortfolioStock from './user_portfolio/user_portfolio_stock';
import UserPortfolioHomeMain from './user_portfolio/user_portfolio_home_main';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/loremips" component={LoremIpsum} />
        <ProtectedRoute path="/stock/:id" component={UserPortfolioStock} />
        <ProtectedRoute exact path="/portfolio" component={UserPortfolioHomeMain} />
      </Switch>
    </div>
  );
}

export default App;