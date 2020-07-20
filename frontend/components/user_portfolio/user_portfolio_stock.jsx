import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function UserPortfolioStock(props){
  const dispatch = useDispatch();
  const { match } = props
  const testState = useSelector(state => state)
  // const [stock, ]

  console.log(match.params)
  console.log(testState)

  return (
    <div className="stock-comp-main-div">
      <section className="stock-comp-body"></section>
      <section className="stock-comp-trans">
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
  );
}

export default UserPortfolioStock;