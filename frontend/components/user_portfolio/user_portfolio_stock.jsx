import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserHomeGraph from "../user_home/user_home_graph";
import UserHomeNav from "../user_home/user_home_nav";
import { logout } from "../../actions/session_actions";
import {
  displayStock,
  displayByURL,
  displayByTicker,
  displayByNewTicker,
} from "../../actions/stock_actions";
import { createWatch } from "../../actions/watchlist_actions";
import {
  grabPortfolio,
  createTransaction,
  clearErrors,
} from "../../actions/portfolio_actions";

function UserPortfolioStock(props) {
  const dispatch = useDispatch();

  const { match } = props;
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.currentUserId],
  );
  const stocks = useSelector((state) => state.entities.stocks);
  const portfolio = useSelector((state) => state.entities.portfolios);
  const error = useSelector((state) => state.errors.transaction);

  //grab stock id if url is ticker
  const [mainId, setId] = useState(match.params.id);
  if (!parseInt(match.params.id)) {
    // setId(match.params.id);
    // } else {
    displayByTicker(match.params.id.toUpperCase())
      .then((res) => {
        setId(res.id);
      })
      .fail(() => {
        displayByNewTicker({
          ticker: Object.keys(stocks)[0].toUpperCase(),
          company_name: stocks[Object.keys(stocks)[0]].quote.companyName,
        }).then((resTwo) => {
          setId(resTwo.id);
        });
      });
  }

  const watching = currentUser.watched_stocks.some(
    (obj) => obj.id === parseInt(match.params.id),
  );
  const [buySell, setBuySell] = useState(0);
  const [transShares, setTransShares] = useState(0);

  const owned = Object.keys(portfolio).length
    ? portfolio.portfolio.reduce((acc, add) => {
        return add.stock_id === parseInt(mainId) ? acc + add.shares : acc + 0;
      }, 0)
    : 0;
  const totalPrice = (
    transShares *
    (Object.keys(stocks).length
      ? stocks[Object.keys(stocks)[0]].quote.latestPrice
      : 0)
  ).toFixed(2);

  const [completedTrans, createTrans] = useState({});
  const transError = error.length
    ? error[0].startsWith("Shares") || error[0].startsWIth("Portfolio")
      ? error[0].split(" ").slice(1).join(" ")
      : error[0]
    : null;

  //tab vars
  const transButton = buySell === 0 ? "Purchase" : "Sale";
  const costProceed = buySell === 0 ? "Cost" : "Proceeds";
  const buyActive = buySell === 0 ? "active" : "";
  const sellActive = buySell === 1 ? "active" : "";

  useEffect(() => {
    dispatch(grabPortfolio());
  }, [Object.values(stocks).length]); //temporary fix to stop infinite compDidMount

  useEffect(() => {
    error.length ? dispatch(clearErrors()) : null;
  }, [owned]);

  useEffect(() => {
    createTrans({});
  }, [match.params.id]);

  function updateUser() {
    const stock = stocks[Object.keys(stocks)[0]].quote;
    dispatch(
      createWatch({ ticker: stock.symbol, company_name: stock.companyName }),
    ).fail((err) => console.log(err.responseJSON[0]));
  }

  function formatNumber(num) {
    const [dollar, cents] = num.toString().split(".");
    const newDollar = dollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return cents ? newDollar + "." + cents : newDollar;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const today = new Date();
    const finalTransShares = Math.abs(transShares);

    dispatch(
      createTransaction({
        transaction_date:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
        transaction_type: transButton.toLowerCase(),
        shares: finalTransShares,
        price: stocks[Object.keys(stocks)[0]].quote.latestPrice,
        stock_id: mainId,
      }),
    ).then((trans) => createTrans(trans));
  }

  return (
    <div className="stock-comp-main-div">
      <nav>
        <UserHomeNav
          currentUser={currentUser}
          currPage={match.params.id}
          getByURL={(id) => dispatch(displayByURL(id))}
          logout={() => dispatch(logout())}
          getStock={(ticker) => dispatch(displayStock(ticker))}
        />
      </nav>

      <h2>ONE STOP STOCK VIEW</h2>

      <div className="ups-main-div">
        {/* <section className="ups-main-stats">
          <span>ITEM ONE</span>
          <span>ITEM TWO</span>
        </section> */}
        {/* https://storage.googleapis.com/iex/api/logos/TSLA.png */}

        <section className="ups-main-mid">
          <UserHomeGraph
            currentUser={currentUser}
            stocks={stocks}
            getStock={(ticker) => dispatch(displayStock(ticker))}
          />
          {/* DIDN'T SEE STATE FOR WATCHING TOGGLE */}
          {watching ? null : (
            <button
              type="button"
              className="add-watchlist"
              onClick={updateUser}
            >
              Add to watchlist
            </button>
          )}
          {/* {toggleWatched ? <span className="watch-added"><i className="fas fa-check"></i></span> : null} */}
        </section>

        {Object.keys(completedTrans).length ? (
          <section className="ups-main-trans completed-main">
            <div className="stock-comp-options">
              <p>Transaction Successful!</p>
              <p>
                {Object.keys(stocks)[0]}{" "}
                {completedTrans.transaction_type === "purchase"
                  ? "purchased"
                  : "sold"}
                : {Math.abs(completedTrans.shares)} shares @{" "}
                {completedTrans.price}
              </p>
              <p>
                Total {costProceed}: ${formatNumber(totalPrice)}
              </p>
              <Link to="/portfolio" className="trans-complete-link">
                View Portfolio{" "}
                <i className="fas fa-arrow-right complete-arrow"></i>
              </Link>
            </div>
          </section>
        ) : (
          <section className="ups-main-trans">
            <div className="stock-comp-options">
              <h4>
                TRADE {Object.keys(stocks).length ? Object.keys(stocks)[0] : ""}{" "}
              </h4>
              <div className="buy-sell-tabs">
                <span
                  className={`buy-tab ${buyActive}`}
                  onClick={() => {
                    setBuySell(0);
                    error.length ? dispatch(clearErrors()) : null;
                  }}
                >
                  Buy
                </span>
                {owned ? (
                  <span
                    className={`sell-tab ${sellActive}`}
                    onClick={() => {
                      setBuySell(1);
                      error.length ? dispatch(clearErrors()) : null;
                    }}
                  >
                    Sell
                  </span>
                ) : null}
              </div>
              <span>Current Shares Owned: {owned}</span>
            </div>
            <div className="stock-comp-trade-details">
              <span>Quantity</span>
              {owned && buySell === 1 ? (
                <input
                  type="number"
                  min="1"
                  max={owned}
                  step="1"
                  onChange={(e) => setTransShares(e.currentTarget.value)}
                />
              ) : (
                <input
                  type="number"
                  min="1"
                  step="1"
                  onChange={(e) => setTransShares(e.currentTarget.value)}
                />
              )}
              {/* ADDRESS TRANSACTION TIME CONSTRAINTS LATER 9:30AM - 5PM */}
              <br />
              <span>
                Last:{" "}
                {Object.keys(stocks).length
                  ? formatNumber(
                      stocks[Object.keys(stocks)[0]].quote.latestPrice.toFixed(
                        4,
                      ),
                    )
                  : ""}
              </span>
            </div>
            <div className="stock-comp-trade-confirm">
              <span>Estimated {costProceed}</span>
              <span>${formatNumber(totalPrice)}</span>
              <button onClick={(e) => handleSubmit(e)}>
                Confirm {transButton} Order
              </button>
            </div>

            <p className="trans-error-msg">{transError}</p>

            <div className="stock-comp-portfolio-details">
              {buySell === 0 ? (
                <p>
                  Cash Available: $
                  {formatNumber(
                    Math.trunc(
                      currentUser.funds_available -
                        transShares *
                          (Object.keys(stocks).length
                            ? stocks[Object.keys(stocks)[0]].quote.latestPrice
                            : 0),
                    ),
                  )}
                </p>
              ) : (
                <p>
                  Cash Balance: $
                  {formatNumber(
                    Math.trunc(
                      currentUser.funds_available +
                        transShares *
                          (Object.keys(stocks).length
                            ? stocks[Object.keys(stocks)[0]].quote.latestPrice
                            : 0),
                    ),
                  )}
                </p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default UserPortfolioStock;
