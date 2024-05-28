import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route exact path="/" Component={GreetingContainer} />
        {/* <AuthRoute path="/login" Component={LoginFormContainer} />
        <AuthRoute path="/signup" Component={SignupFormContainer} /> */}
        <Route exact path="/loremips" Component={LoremIpsum} />
        {/* <ProtectedRoute path="/stock/:id" Component={UserPortfolioStock} />
        <ProtectedRoute exact path="/portfolio" Component={UserPortfolioHomeMain} /> */}
      </Routes>
    </div>
  );
}

export default App;