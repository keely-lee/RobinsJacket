import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserHomeNav from '../user_home/user_home_nav';
import { logout } from '../../actions/session_actions';
import { displayStock } from '../../actions/stock_actions';
import { grabPortfolio } from '../../actions/portfolio_actions';

function UserPortfolioHomeMain(){
  const state = useSelector(state => state) //
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const portfolio = useSelector(state => state.entities.portfolios)
  const dispatch = useDispatch();

  let portfolioValue = currentUser.funds_available;



  useEffect(() => { 
    dispatch(grabPortfolio())
      .then((res) => {
        res.portfolio.portfolio.forEach((trans) => {
          portfolioValue += trans.total_amt;

          console.log(trans.total_amt)
          console.log("total_amt")
        });
      })
  }, [Object.values(portfolio).length]); //temporary fix to stop infinite compDidMount

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
          <span className="uph-">{currentUser.fname} {currentUser.lname} account value:</span>
          <span className="uph-portfolio-value">{portfolioValue}</span>
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
          <span>GAIN/LOSS AMOUNT</span> {/* (shares owned * purchase price) - (shares owned * today's market price) DEAL WITH WHEN WORK OUT INDIVIDUAL STOCK NUMBERS*/}
        </div>
      </section>
    </div>
  );
}

export default UserPortfolioHomeMain;
