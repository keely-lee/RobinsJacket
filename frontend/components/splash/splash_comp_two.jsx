import React from 'react';

class SplashCompTwo extends React.Component {
  //NEEDS A MODAL for the link!

  render(){
    return (
      <section className="splash-comp-two">
        <h2>Get Free from Commission Fees</h2>
        <span>Make unlimited commission-free trades in stocks, ETFs, and options with Robinhood Financial, as well as buy and sell cryptocurrencies with Robinhood Crypto. See our fee schedule to learn more about cost.</span>
        {/* FEE SCHEDULE is a LINK. Refactor later*/}
        <div className="splash-two-disclosure">
          <button>{'\u24D8'} Commissions Disclosure</button> 
        </div>
        {/* NEED BUTTON FOR MODAL; the info \u24D8 is a separate part */}
      </section>
    )
  }
}

export default SplashCompTwo;