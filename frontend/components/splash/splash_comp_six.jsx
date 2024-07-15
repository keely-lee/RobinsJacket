import React from "react";
import { Link } from "react-router-dom";

class SplashCompSix extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-comp-six">
        <div className="splash-comp-six-div">
          <section className="splash-comp-six-top">
            <div className="splash-comp-six-top-left">
              <section>
                <button type="button">Stocks &amp; Funds</button>
                <button type="button">Options</button>
                <button type="button">Gold</button>
                <button type="button">Cash Management</button>
                <button type="button" className="crypto">Crypto</button>
              </section>
              <section>
                <button type="button">Learn</button>
                <button type="button">Support</button>
                <button type="button">Snacks</button>
              </section>
              <section>
                <button type="button">About Us</button>
                <button type="button">Careers</button>
                <button type="button">Company News</button>
              </section>
            </div>

            <div className="splash-comp-six-top-right">
              <section className="splash-comp-six-top-right-top">
                <h4>RobinSnacks</h4>
                <p>
                  The 3-minute newsletter with fresh takes on the financial news
                  you need to start your day.
                </p>
                <form
                  onClick={this.handleSubmit}
                  className="add-email-form-dark"
                >
                  {/* add on change eventually for email submit */}
                  <input
                    type="text"
                    className="add-email-input"
                    placeholder="name@email.com"
                  />
                  <Link className="button-green access-button" to={""}>
                    Subscribe
                  </Link>
                </form>
              </section>

              <section className="splash-comp-six-right-buttons">
                <button type="button">Check the background of the firm on FINRA’s Broker Check</button>
                <button type="button">RobinsJacket Terms &amp; Conditions</button>
                <button type="button">Disclosure Library</button>
                <button type="button">Privacy</button>
              </section>
            </div>
          </section>

          <section className="splash-comp-six-bottom">
            <p>© March 2020 RobinsJacket. All rights reserved.</p>
            <p>
              RobinsJacket means RobinsMarkets, Inc. and its in-application and
              web experiences with its family of wholly owned subsidiaries which
              includes RobinsJacket Financial, RobinsJacket Securities, LLC,
              RobinsCrypto, and RobinsJacket U.K.
            </p>
            <p>
              All investments involve risks, including the possible loss of
              capital.
            </p>
            <span>
              Securities trading is offered to self-directed customers by
              RobinsJacket Financial. RobinsJacket Financial is a member of the{" "}
            </span>
            <Link to="/loremips" className="link-green-only">
              Financial Industry Regulatory Authority (FINRA).
            </Link>
            <div className="disclosure-modal shift-left">
              <button type="button">
                {"\u24D8"} View Important Disclosures
              </button>
              {/* TODO: change button to modal */}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SplashCompSix;
