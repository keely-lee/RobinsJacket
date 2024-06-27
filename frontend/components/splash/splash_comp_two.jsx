import React from "react";

class SplashCompTwo extends React.Component {
  render() {
    return (
      <section className="splash-comp-two">
        <h2>Get Free from Commission Fees</h2>
        <span>
          Make unlimited commission-free trades in stocks, ETFs, and options
          with RobinsJacket Financial, as well as buy and sell cryptocurrencies
          with RobinJacket Crypto. See our fee schedule to learn more about
          cost.
        </span>
        {this.props.disclosure}
        {/* FEE SCHEDULE is a LINK. Refactor later*/}
      </section>
    );
  }
}

export default SplashCompTwo;
