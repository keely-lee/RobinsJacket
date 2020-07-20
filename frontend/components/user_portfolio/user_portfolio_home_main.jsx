import React, { useState } from 'react';

function UserPortfolioHomeMain(){


  return (
    <div className="user-portfolio-home">
      <h1>My Account: Positions</h1>
      <section className="user-portfolio-home-summary">
        <div className="uph-summary-1">
          <span>ACCOUNTNAME value</span>
          <span>VALUE</span>
          <span>VALUE DIFF</span>
        </div>
        <div className="uph-summary-2">
          <span>Stock Buying Power</span>
          <span>REMAINING CASH</span>
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
