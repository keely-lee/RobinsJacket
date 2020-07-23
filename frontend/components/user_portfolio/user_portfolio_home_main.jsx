import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserHomeNav from '../user_home/user_home_nav';
import { logout } from '../../actions/session_actions';
import { displayStocks, displayStock } from '../../actions/stock_actions';
import { grabPortfolio } from '../../actions/portfolio_actions';


function UserPortfolioHomeMain(){
  const state = useSelector(state => state) //
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const portfolio = useSelector(state => state.entities.portfolios)
  const stocks = useSelector(state => state.entities.stocks)
  const dispatch = useDispatch();

  console.log(stocks)
  console.log("stocks")
  
  //DIV VARS FOR RETURN
  let totalGL; //class name for gain/loss
  let todayGL; //class name for gain/loss
  
  //VARS FOR SUMMARY CALC
  let portfolioValue = currentUser.funds_available;
  let totalGLAmt = 0;
  let todayGLAmt = 0;

  useEffect(() => { 
    dispatch(grabPortfolio())
      .then((res) => {
        console.log(res)
        console.log("res")
        res.portfolio.portfolio.forEach((trans) => {
          
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
          <span>{currentUser.fname} {currentUser.lname} account value:</span>
          <span className="uph-portfolio-value">{portfolioValue}</span>
          <span>VALUE DIFF</span> { /* SOME CALCULATION WITH TRANSACTIONS!!! -- INCLUDE CURRENT SHARES OWNED?? */}
        </div>
        <div className="uph-summary-2">
          <span>Stock Buying Power</span>
          <span>{currentUser.funds_available}</span>
        </div>
        <div className="uph-summary-3">
          <span>total gain/loss</span>
          <span className={totalGL}>{totalGLAmt}</span> {/* total_amt - (shares owned * today's market price) DEAL WITH WHEN WORK OUT INDIVIDUAL STOCK NUMBERS*/}
        </div>
        <div className="uph-summary-4">
          <span>today's gain/loss</span>
          <span className={todayGL}>{todayGLAmt}</span> { /* forEach stock owned -> (previous Day's closingPrice - currentMoment closingPrice) PUT IN A NOTE ABOUT TIME DELAY FOR PRICE REPORTING */}
        </div>
      </section>
    </div>
  );
}

export default UserPortfolioHomeMain;
