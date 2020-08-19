import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import UserHomeNav from '../user_home/user_home_nav';
import { logout } from '../../actions/session_actions';
import { displayStocks, displayStock } from '../../actions/stock_actions';
import { grabPortfolio } from '../../actions/portfolio_actions';

function UserPortfolioHomeMain(){

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const portfolio = useSelector(state => state.entities.portfolios);
  const stocks = useSelector(state => state.entities.stocks);

  const owned = Object.keys(portfolio).length ? calcOwned(portfolio.portfolio) : {};

  //DIV VARS FOR RETURN
  let totalGL; //class name for gain/loss
  let todayGL; //class name for gain/loss
  const uphPvDiff = stateTotalGL < 0 ? "uph-minus" : "uph-plus"

  //VARS FOR SUMMARY CALC
  let portfolioValue = currentUser.funds_available;
  let totalGLAmt = 0;
  let todayGLAmt = 0;

  const [stateTotalGL, setTotalGL] = useState(0)
  const [stateTodayGL, setTodayGL] = useState(0)

  useEffect(() => {
    dispatch(grabPortfolio());
    dispatch(displayStocks(Object.keys(owned).join(",")));

    setTotalGL(totalGLAmt);
    setTodayGL(todayGLAmt);
  }, [Object.values(stocks).length]); //temporary fix to stop infinite compDidMount

  function calcOwned(transactions){ //array of transactions
    let offSet = 0; //offSet = negShares (iterate backwards over array)
    let lifoCost = 0;
    const currOwned = {};

    for (let i = transactions.length - 1; i >= 0; i--) {
      //calc notes: transactions must be sorted by stock_id, then date-ascending (iterate backwards)
      if (transactions[i].trans_type === 'sale') {
        lifoCost = 0;
        offSet += transactions[i].shares
      } else {
        //......PURCHASES
        if (offSet < 0) {
          if (offSet < transactions[i].shares) {
            lifoCost = (transactions[i].shares + offSet) * transactions[i].price;
            offSet = 0;
          } else {  //.....(offSet is greater than purchased shares)
            lifoCost = 0;
            offSet += shares;
          }
        } else {
          lifoCost = transactions[i].shares * transactions[i].price;
        }
      }

      if (currOwned[transactions[i].ticker]) {
        currOwned[transactions[i].ticker].shares += transactions[i].shares;
        currOwned[transactions[i].ticker].cost += lifoCost;
      } else {
        currOwned[transactions[i].ticker] = {
          shares: transactions[i].shares,
          cost: lifoCost,
          id: transactions[i].stock_id
        }
      }
    }

    return currOwned;
  }

  function formatComma(num){
    const [dollar, cents] = num.toString().split(".")
    const newDollar = dollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ( cents ? newDollar + "." + cents : newDollar )
  }

  console.log(owned)
  console.log("owned")

  return (
    <div className="user-portfolio-home">
      <nav>
        <UserHomeNav
          currentUser={currentUser}
          logout={() => dispatch(logout())}
          getStock={(ticker) => dispatch(displayStock(ticker))}
        />
      </nav>

      <div className="uph-div-wrapper">
        <div className="user-portfolio-home-div">
          <h1>My Account: Positions</h1>

          <section className="user-portfolio-home-summary">
            <div className="uph-summary-1">
              <span>
                {currentUser.fname} {currentUser.lname} account value:
              </span>
              <span>$ {formatComma((portfolioValue + stateTotalGL).toFixed(2))}</span>
              <span className={`uph-pv-diff ${uphPvDiff}`}>$ {formatComma(portfolioValue.toFixed(2))}</span>
            </div>
            <div className="uph-summary-2">
              <span>Stock Buying Power</span>
              <span>$ {formatComma(currentUser.funds_available.toFixed(2))}</span>
            </div>
            <div className="uph-summary-3">
              <span>total gain/loss</span>
              <span className={totalGL}>$ {formatComma(stateTotalGL.toFixed(2))}</span>
              {/* total_amt - (shares owned * today's market price) DEAL WITH WHEN WORK OUT INDIVIDUAL STOCK NUMBERS*/}
            </div>
            <div className="uph-summary-4">
              <span>today's gain/loss</span>
              <span className={todayGL}>$ {formatComma(stateTodayGL.toFixed(2))}</span>
              {/* forEach stock owned -> (previous Day's closingPrice - currentMoment closingPrice) PUT IN A NOTE ABOUT TIME DELAY FOR PRICE REPORTING */}
            </div>
          </section>

          <section className="user-portfolio-home-chart">
            <h3>Stocks</h3>
            <table className="uph-table">
              <tbody>
                <tr className="uph-tr-header">
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Mkt Price</th>
                  <th>Change ($)</th>
                  <th>Cost</th>
                  <th>Mkt Value</th>
                  <th>Gain ($)</th>
                  <th>Gain (%)</th>
                </tr>

                {Object.keys(owned).length && Object.keys(stocks).length ? Object.keys(owned).map((ticker, idx) => {
                  if (!stocks[ticker]) return;

                  const current = owned[ticker];
                  const market = stocks[ticker]["quote"];

                  totalGLAmt += (current["shares"] * market["latestPrice"] - current["cost"]);
                  todayGLAmt += (current["shares"] * (market["previousClose"] - market["latestPrice"]));

                  return (
                    <tr className={`uph-tr-${idx}`}>
                      <td><Link to={`/stock/${current.id}`}>{ticker}</Link></td>
                      <td>{current["shares"]}</td>
                      <td>{formatComma(market["latestPrice"])}</td>
                      <td>{( market["previousClose"] - market["latestPrice"] ).toFixed(4)}</td>
                      <td>{formatComma(current["cost"].toFixed(2))}</td>
                      <td>{formatComma((current["shares"] * market["latestPrice"]).toFixed(2))}</td>
                      <td>{formatComma((current["shares"] * market["latestPrice"] - current["cost"]).toFixed(2))}</td>
                      <td>{(((current["shares"] * market["latestPrice"] - current["cost"]) / (current["shares"] * market["latestPrice"])) * 100).toFixed(2) + "%"}</td>
                    </tr>
                  )
                }) : console.log("EMPTY")} {/* INSERT LINK "LET'S START TRADING" IF EMPTY*/}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UserPortfolioHomeMain;
