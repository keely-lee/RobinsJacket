import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserHomeNav from '../user_home/user_home_nav';
import { logout } from '../../actions/session_actions';
import { displayStock } from '../../actions/stock_actions';
import { grabPortfolio } from '../../actions/portfolio_actions';

function UserPortfolioHomeMain(){
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const state = useSelector(state => state)
  const portfolio = useSelector(state => state.entities.portfolios)
  const dispatch = useDispatch();

  let portVal = currentUser.funds_available;

  useEffect(() => { 
    dispatch(grabPortfolio());

    if (portfolio.length) {
      portfolio.portfolio.forEach((trans) => {
        portVal += trans[total_amount];
      });
      console.log(portVal);
      console.log("portVal");
    }

    console.log(portVal)
    console.log("portVal second")
  }, [Object.values(portfolio).length]); //temporary fix to stop infinite compDidMount

  console.log(portfolio)
  console.log("portfolio")


  return (
    <div className="user-portfolio-home">
      <nav>
        <UserHomeNav 
          currentUser={currentUser}
          logout={ () => dispatch(logout())}
          getStock={ (ticker) => dispatch(displayStock(ticker))}
          />
      </nav>

      <h1>My Account: Positions</h1>
      <section className="user-portfolio-home-summary">
        <div className="uph-summary-1">
          <span>{currentUser.fname} {currentUser.lname} account value:</span>
          <span>VALUE</span>
          <span>VALUE DIFF</span>
        </div>
        <div className="uph-summary-2">
          <span>Stock Buying Power</span>
          <span>{currentUser.funds_available}</span>
        </div>
        <div className="uph-summary-3">
          <span>GAIN/LOSS Total</span>
          <span>GAIN/LOSS AMOUNT</span>
        </div>
        <div className="uph-summary-4">
          <span>Today's GAIN/LOSS</span>
          <span>GAIN/LOSS AMOUNT</span>
        </div>
      </section>
    </div>
  );
}

export default UserPortfolioHomeMain;
