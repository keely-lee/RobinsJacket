import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import reduce from "lodash/reduce";
import UserHomeNav from "../user_home/user_home_nav";
import { logout } from "../../actions/session_actions";
import { displayStocks, displayStock } from "../../actions/stock_actions";
import { grabPortfolio } from "../../actions/portfolio_actions";

function UserPortfolioHomeMain() {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.currentUserId],
  );
  const portfolio = useSelector((state) => state.entities.portfolios);
  const stocks = useSelector((state) => state.entities.stocks);

  const owned = Object.keys(portfolio).length
    ? calcOwned(portfolio.portfolio)
    : {};

  const [stateTotalGL, setTotalGL] = useState(0);
  const [stateTodayGL, setTodayGL] = useState(0);
  const [stateMarketValue, setMarketValue] = useState(0);

  const totalGLDiff = stateTotalGL < 0 ? "uph-minus" : "uph-plus"; // class name for total gain/loss (color)
  const uphPvDiff = stateTodayGL < 0 ? "uph-minus" : "uph-plus"; // class name for today gain/loss (color)
  const portfolioValue = currentUser.funds_available;
  
  useEffect(() => {
    dispatch(grabPortfolio()); // MEMOIZE PORTFOLIO VALUE // or don't dispatch each time (3 fetches per load)
    dispatch(displayStocks(Object.keys(owned).join(","))).then((res) => {
      if (Object.keys(owned).length) {
        const totals = reduce(res.stocks, (acc, stock, ticker) => {
          const current = owned[ticker];
          const { regularMarketPrice, regularMarketPreviousClose } = stock;
          // [TODO KL]: handle updated ticker changes
          if (!regularMarketPrice || !regularMarketPreviousClose) return acc;
          acc["totalGLAmt"] += current["shares"] * regularMarketPrice - current["cost"];
          acc["todayGLAmt"] += current["shares"] * (regularMarketPreviousClose - regularMarketPrice);
          acc["totalMarketValue"] += current["shares"] * regularMarketPrice;
          return acc;
        }, {
          totalGLAmt: 0,
          todayGLAmt: 0,
          totalMarketValue: 0
        })

        setTotalGL(totals["totalGLAmt"]);
        setTodayGL(totals["todayGLAmt"]);
        setMarketValue(totals["totalMarketValue"]);
      }
    });
  }, [Object.values(stocks).length]); // temporary fix to stop infinite compDidMount

  function calcOwned(transactions) {
    // array of transactions
    let offSet = 0; // offSet = negShares (iterate backwards over array)
    let lifoCost = 0;
    const currOwned = {};

    for (let i = transactions.length - 1; i >= 0; i--) {
      // calc notes: transactions must be sorted by stock_id, then date-ascending (iterate backwards)
      if (transactions[i].trans_type === "sale") {
        lifoCost = 0;
        offSet += transactions[i].shares;
      } else {
        // ......PURCHASES
        if (offSet < 0) {
          if (offSet < transactions[i].shares) {
            lifoCost =
              (transactions[i].shares + offSet) * transactions[i].price;
            offSet = 0;
          } else {
            // .....(offSet is greater than purchased shares)
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
          id: transactions[i].stock_id,
        };
      }
    }

    return currOwned;
  }

  function formatComma(num) {
    const [dollar, cents] = num.toString().split(".");
    const newDollar = dollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return cents ? newDollar + "." + cents : newDollar;
  }

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
        <div>
          <h1>My Account: Positions</h1>

          <section className="uph-summary">
            <div>
              <span>
                {currentUser.fname} {currentUser.lname} Account value:{" "}
              </span>
              <span>
                $ {formatComma((portfolioValue + stateMarketValue).toFixed(2))}
              </span>{" "}
              {/* cash available + stocks value (market) */}
              <span className={`uph-pv-diff ${uphPvDiff}`}>
                from $
                {formatComma(
                  (portfolioValue + stateMarketValue - stateTodayGL).toFixed(2),
                )}
              </span>{" "}
              {/* cash available + stocks value (market) + today's GL */}
            </div>
            <div>
              <span>Stock Buying Power</span>
              <span>$ {formatComma(portfolioValue.toFixed(2))}</span>{" "}
              {/* cash available (user.funds_available) */}
            </div>
            <div>
              <span>Total gain/loss</span>
              <span className={totalGLDiff}>
                $ {formatComma(stateTotalGL.toFixed(2))}
              </span>
              {/* total_amt - (shares owned * today's market price) DEAL WITH WHEN WORK OUT INDIVIDUAL STOCK NUMBERS*/}
            </div>
            <div>
              <span>Today's gain/loss</span>
              <span className={uphPvDiff}>
                $ {formatComma(stateTodayGL.toFixed(2))}
              </span>
              {/* forEach stock owned -> (previous Day's closingPrice - latestPrice) PUT IN A NOTE ABOUT TIME DELAY FOR PRICE REPORTING */}
            </div>
          </section>

          <section>
            <h3>Summary</h3>
            <table>
              <tbody>
                <tr>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Change ($)</th>
                  <th>Change (%)</th>
                  <th>Volume</th>
                  <th>Avg Volume</th>
                  <th>Prev Close</th>
                  <th>Open</th>
                  <th>Cost</th>
                  <th>Mkt Value</th>
                  <th>Tot. Gain ($)</th>
                  <th>Tot. Gain (%)</th>


                </tr>
                {Object.keys(owned).length && Object.keys(stocks).length
                  ? Object.keys(owned).map((ticker, _idx) => {
                      if (!stocks[ticker]) return null;

                      const current = owned[ticker];
                      const regularMarketPrice = stocks[ticker]["regularMarketPrice"] || 0.0001;
                      const regularMarketPreviousClose = stocks[ticker]["regularMarketPreviousClose"] || 0.0001;
                      const regularMarketVolume = stocks[ticker]["regularMarketVolume"] || 0.0001;
                      const averageDailyVolume3Month = stocks[ticker]["averageDailyVolume3Month"] ||  0.0001;
                      const regularMarketOpen = stocks[ticker]["regularMarketOpen"] ||  0.0001;
                      // const regularMarketDayRange = stocks[ticker]["regularMarketDayRange"] // string (ex "229.655 - 232.3412") rep with line range low -- dot for current price ---- high
                      // [TODO KL]: handle updated ticker changes

                      const dayGL = 
                        regularMarketPreviousClose - regularMarketPrice > 0
                          ? "uph-minus"
                          : "uph-plus";
                      const totGL =
                        current["shares"] * regularMarketPrice -
                          current["cost"] <
                        0
                          ? "uph-minus"
                          : "uph-plus";

                      return (
                        <tr key={ticker}>
                          <td>
                            <Link to={`/stock/${ticker}`}>{ticker}</Link>
                          </td>
                          <td>{current["shares"]}</td>
                          <td>{formatComma(regularMarketPrice)}</td>
                          <td className={dayGL}>
                            {( regularMarketPrice - regularMarketPreviousClose ).toFixed(2)}
                          </td>
                          <td className={dayGL}>
                            {(((regularMarketPrice - regularMarketPreviousClose)/regularMarketPreviousClose)*100).toFixed(2)}
                          </td>
                          <td>{(regularMarketVolume/1000000).toFixed(2)}M</td>
                          <td>{(averageDailyVolume3Month/1000000).toFixed(2)}M</td>
                          <td>{regularMarketPreviousClose}</td>
                          <td>{regularMarketOpen}</td>
                          <td>{formatComma(current["cost"].toFixed(2))}</td>
                          <td>
                            {formatComma(
                              (
                                current["shares"] * regularMarketPrice
                              ).toFixed(2),
                            )}
                          </td>
                          <td className={totGL}>
                            {regularMarketPrice === 0.0001 ? 0 :
                            formatComma(
                              (
                                current["shares"] * regularMarketPrice -
                                current["cost"]
                              ).toFixed(2),
                            )}
                          </td>{" "}
                          {/* total gain/loss for this stock */}
                          <td className={totGL}>
                            {regularMarketPrice === 0.0001 ? 0 : (
                              ((current["shares"] * regularMarketPrice -
                                current["cost"]) /
                                (current["shares"] * regularMarketPrice)) *
                              100
                            ).toFixed(2) + "%"}
                          </td>
                        </tr>
                      );
                    })
                  : console.log("EMPTY")}{" "}
                {/* INSERT LINK "LET'S START TRADING" IF EMPTY*/}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UserPortfolioHomeMain;
