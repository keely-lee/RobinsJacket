import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/GreetingContainer";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoremIpsum from "./splash/lorem_ipsum";
import UserStockTransaction from "./user_portfolio/user_stock_transaction";
import UserPortfolioHomeMain from "./user_portfolio/user_portfolio_home_main";

const App = () => {
  return (
    <div>
      <Modal />
      <Routes>
        <Route path="/" Component={GreetingContainer} />
        <Route exact path="/loremips" Component={LoremIpsum} />

        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginFormContainer />} />
          <Route path="/signup" element={<SignupFormContainer />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/stock/:ticker" element={<UserStockTransaction />} />
          <Route exact path="/portfolio" element={<UserPortfolioHomeMain />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
