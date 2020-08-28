import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserHomeGraph from '../user_home/user_home_graph'
import UserHomeNav from '../user_home/user_home_nav'
import { logout } from '../../actions/session_actions';
import { displayStock, displayByURL } from '../../actions/stock_actions';
import { createWatch } from '../../actions/watchlist_actions';
import { grabPortfolio, createTransaction } from '../../actions/portfolio_actions';

function UserPortfolioStock(props){
  const dispatch = useDispatch();
  
  const { match } = props
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const stocks = useSelector(state => state.entities.stocks);
  const portfolio = useSelector(state => state.entities.portfolios); 

  const watching = currentUser.watched_stocks.some(obj => obj.id === parseInt(match.params.id));
  const [buySell, setBuySell] = useState(0);
  const [transShares, setTransShares] = useState(0);
  
  const owned = Object.keys(portfolio).length ? portfolio.portfolio.reduce((acc, add) => {
    return (add.stock_id === parseInt(match.params.id)) ? acc + add.shares : acc + 0;
  }, 0) : 0;
  const totalPrice = formatNumber( (transShares * (Object.keys(stocks).length ? stocks[Object.keys(stocks)[0]].quote.latestPrice : 0)).toFixed(2) )

  // this.updateUser = this.updateUser.bind(this); //BIND FUNCS IN THE OPEN??
  
  // console.log(watching)
  // console.log(currentUser)
  console.log(stocks)
  console.log("currentUser LINE 16")
  // console.log(transShares);
  // console.log("transShares line 35");
  
  //tab vars
  const transButton = buySell === 0 ? "Purchase" : "Sale";
  const costProceed = buySell === 0 ? "Cost" : "Proceeds";
  const buyActive = buySell === 0 ? "active" : "";
  const sellActive = buySell === 1 ? "active" : "";
  
  useEffect(() => {
    dispatch(grabPortfolio());
  }, [Object.values(stocks).length]); //temporary fix to stop infinite compDidMount

  function updateUser(){
    const stock = stocks[Object.keys(stocks)[0]].quote;
    dispatch(createWatch({ ticker: stock.symbol, company_name: stock.companyName }))
      .fail((err) => console.log(err.responseJSON[0]))
  }

  function handleSubmit(e){
    e.preventDefault();

    const today = new Date();

    console.log(today)
    console.log(typeof today)
    console.log("today")

    dispatch(createTransaction({
      transaction_date: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
      transaction_type: transButton.toLowerCase(),
      shares: transShares,
      price: stocks[Object.keys(stocks)[0]].quote.latestPrice,
      // portfolio_id: current
      stock_id: match.params.id
    }))
  }

  function formatNumber(num){
    const [dollar, cents] = num.toString().split(".")
    const newDollar = dollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (cents ? newDollar + "." + cents : newDollar)
  }

  return (
    <div className="stock-comp-main-div">
      <nav>
        <UserHomeNav
          currentUser={currentUser}
          currPage={match.params.id}
          getByURL={id => dispatch(displayByURL(id))}
          logout={() => dispatch(logout())}
          getStock={ticker => dispatch(displayStock(ticker))}
        />
      </nav>

      <h2>ONE STOP STOCK VIEW</h2>

      <div className="ups-main-div">
        {/* <section className="ups-main-stats">
          <span>ITEM ONE</span>
          <span>ITEM TWO</span>
        </section> */}

        <section className="ups-main-mid">
          <UserHomeGraph
            currentUser={currentUser}
            stocks={stocks}
            getStock={ticker => dispatch(displayStock(ticker))}/>
          { watching ? null : 
            <button type="button" className="add-watchlist" onClick={updateUser}>
              Add to watchlist
            </button> }
          {/* {toggleWatched ? <span className="watch-added"><i className="fas fa-check"></i></span> : null} */}
        </section>

        <section className="ups-main-trans">
          <div className="stock-comp-options">
            {/* NEED STOCK NAME FOR H4-TRADE $NAME */}
            <h4>TRADE {Object.keys(stocks).length ? Object.keys(stocks)[0] : ""} </h4>
            <div className="buy-sell-tabs">
              <span className={`buy-tab ${buyActive}`} onClick={() => setBuySell(0)}>Buy</span>
              {owned ? <span className={`sell-tab ${sellActive}`} onClick={() => setBuySell(1)}>Sell</span> : null}
            </div>
            <span>Current Shares Owned: {owned}</span>
          </div>
          <div className="stock-comp-trade-details">
            <span>Quantity</span>
            { owned && buySell === 1 ? <input type="number" min="1" max={owned} step="1"
              onChange={(e) => setTransShares(e.currentTarget.value)}
            /> :
            <input type="number" min="1" step="1"
              onChange={(e) => setTransShares(e.currentTarget.value)}
            /> }
            {/* ADDRESS TRANSACTION TIME CONSTRAINTS LATER 9:30AM - 5PM */}
            <span>Last: {Object.keys(stocks).length ? formatNumber(stocks[Object.keys(stocks)[0]].quote.latestPrice.toFixed(4)) : ""}</span>
          </div>
          <div className="stock-comp-trade-confirm">
            <span>Estimated {costProceed}</span>
            <span>${totalPrice}</span>
            <button onClick={(e) => handleSubmit(e)}>Confirm {transButton} Order</button>
          </div>
          <div className="stock-comp-portfolio-details">
            Cash Available
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserPortfolioStock;