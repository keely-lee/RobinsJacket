import React from 'react';
import { Link } from 'react-router-dom';

class SplashCompSix extends React.Component {
  constructor(props) {
    super(props)
    //EVENTUAL STATE FOR LAST MODAL
  }

  render() {
    return (
      <div className="splash-comp-six">
        <div className="splash-comp-six-div">
          <section className="splash-comp-six-top">
            <div className="splash-comp-six-top-left">
              <section className="splash-comp-six-buttons">
                <button type="button" className="splash-six-bottom-link-green">Stocks &amp; Funds</button>
                <button type="button" className="splash-six-bottom-link-green">Options</button>
                <button type="button" className="splash-six-bottom-link-green">Gold</button>
                <button type="button" className="splash-six-bottom-link-green">Cash Management</button>
                <button type="button" className="splash-six-bottom-link-crypto">Crypto</button>
              </section>
              <section className="splash-comp-six-buttons">
                <button type="button" className="splash-six-bottom-link-green">Learn</button>
                <button type="button" className="splash-six-bottom-link-green">Support</button>
                <button type="button" className="splash-six-bottom-link-green">Snacks</button>
              </section>
              <section className="splash-comp-six-buttons">
                <button type="button" className="splash-six-bottom-link-green">About Us</button>
                <button type="button" className="splash-six-bottom-link-green">Careers</button>
                <button type="button" className="splash-six-bottom-link-green">Company News</button>
                <div className="splash-comp-six-icon-buttons">
                    {/* ICON BUTTONS NEED TO BE ADDED */}
                </div>
              </section>
            </div>

            <div className="splash-comp-six-top-right">
              <section className="splash-comp-six-top-right-top">
                <h4>RobinSnacks</h4>
                <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>

                {/* CHANGE THESE DETAILS */}
                <form onClick={this.handleSubmit} className="add-email-form" >
                  {/* add on change eventually for email submit */}
                  <input type="text" className="add-email-input" placeholder="name@email.com" />
                  <Link className="button-green access-button" to={""}>Get Access Now</Link>
                </form>
              </section>

              <section className="splash-comp-six-right-buttons">
                <button type="button" className="splash-six-top-link-green-right">Check the background of the firm on FINRA’s Broker Check</button>
                <button type="button" className="splash-six-top-link-green-right">Robinhood Terms &amp; Conditions</button>
                <button type="button" className="splash-six-top-link-green-right">Disclosure Library</button>
                <button type="button" className="splash-six-top-link-green-right">Privacy</button>
              </section>
            </div>
          </section>

          <section className="splash-comp-six-bottom">
            <p>© March 2020 RobinsJacket. All rights reserved.</p>
            <p>RobinsJacket means RobinsMarkets, Inc. and its in-application and web experiences with its family of wholly owned subsidiaries which includes RobinsJacket Financial, RobinsJacket Securities, LLC, RobinsCrypto, and RobinsJacket U.K.</p>
            <p>All investments involve risks, including the possible loss of capital.</p>
            <span>Securities trading is offered to self-directed customers by RobinsJacket Financial. RobinsJacket Financial is a member of the </span><Link to="/loremips" className="link-green-only">Financial Industry Regulatory Authority (FINRA).</Link>
            <div className="disclosure-modal shift-left">
              <button type="button">{'\u24D8'} View Important Disclosures</button>
              {/* CHANGE BUTTON TO MODAL */}
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default SplashCompSix;