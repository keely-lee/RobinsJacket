import React from "react";

class SplashCompTwo extends React.Component {
  render() {
    return (
      <div className="splash-comp-two">
        <section>
          <h2>Get Free from Commission Fees</h2>
          <span>
            Make unlimited commission-free trades in stocks, ETFs, and options
            with RobinsJacket Financial, as well as buy and sell cryptocurrencies
            with RobinJacket Crypto. See our fee schedule to learn more about
            cost.
          </span>
          {this.props.disclosure}
        </section>
      </div>
    );
  }
}

export default SplashCompTwo;
