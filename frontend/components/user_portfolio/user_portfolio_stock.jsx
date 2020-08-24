import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserHomeGraph from '../user_home/user_home_graph'
import UserHomeNav from '../user_home/user_home_nav'
import { logout } from '../../actions/session_actions';
import { displayStock, displayByURL } from '../../actions/stock_actions';
import { createWatch } from '../../actions/watchlist_actions';
import { grabPortfolio } from '../../actions/portfolio_actions';

function UserPortfolioStock(props){
  const dispatch = useDispatch();
  
  const { match } = props
  const currentUser = useSelector(state => state.entities.users[state.session.currentUserId]);
  const stocks = useSelector(state => state.entities.stocks);
  const watching = currentUser.watched_stocks.some(obj => obj.id === parseInt(match.params.id));
  const buySell, setBuySell = useState(0) //USE WHEN TABS ARE SET UP, NO NEED FOR FUNC SETBIYSELL

  // this.updateUser = this.updateUser.bind(this); //BIND FUNCS IN THE OPEN??

  console.log(watching)
  console.log(currentUser)
  console.log(stocks)
  console.log("currentUser LINE 16")

  useEffect(() => {
    dispatch(grabPortfolio());
  }, [Object.values(stocks).length]); //temporary fix to stop infinite compDidMount

  // const testState = useSelector(state => state);

  // console.log("testState LINE 18")
  // console.log(testState)

  function updateUser(){
    const stock = stocks[Object.keys(stocks)[0]].quote;
    dispatch(createWatch({ ticker: stock.symbol, company_name: stock.companyName }))
      .fail((err) => console.log(err.responseJSON[0]))
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
        <section className="ups-main-stats">
          <span>ITEM ONE</span>
          <span>ITEM TWO</span>
        </section>

        <section className="ups-main-mid">
          <UserHomeGraph
            currentUser={currentUser}
            stocks={stocks}
            getStock={ticker => dispatch(displayStock(ticker))}
            createWatch={stock => dispatch(createWatch(stock))}/>
          { watching ? null : 
            <button type="button" className="add-watchlist" onClick={updateUser}>
              Add to watchlist
            </button> }
          {/* {toggleWatched ? <span className="watch-added"><i className="fas fa-check"></i></span> : null} */}
        </section>

        <section className="ups-main-trans">
          <div className="stock-comp-options">
            {/* NEED STOCK NAME FOR H4-TRADE $NAME */}
            <h4>Trade </h4>
          </div>
          <div className="stock-comp-trade-details">
            <span>Shares</span>
            <input type="text"/>
            <span>Market Price</span>
            <span>PRICE$$</span>
          </div>
          <div className="stock-comp-trade-confirm">
            <span>Estimated COST/CREDIT</span>
            <span>COST$$</span>
            <button>BUY/SELL Button</button>
          </div>
          <div className="stock-comp-portfolio-details">
            MONEY$$ BUY/SELL Power Available
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserPortfolioStock;