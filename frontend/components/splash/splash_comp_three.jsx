import React from "react";
import { Link } from "react-router-dom";

class SplashCompThree extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="splash-comp-three">
        <section className="splash-c3-left">
          <h2>Introducing Fractional Shares</h2>
          <span>Invest in thousands of stocks with just $1.</span>

          <div className="splash-comp-three-spans">
            <section>
              <p className="splash-three-header">Invest Any Amount</p>
              <span>
                Choose how much you want to invest, and we’ll convert from
                dollars to shares
              </span>
            </section>
            <section>
              <p className="splash-three-header">Build Your Portfolio</p>
              <span>
                Customize your portfolio, allocate assets from aggressive to
                passive.
              </span>
            </section>
            <section>
              <p className="splash-three-header">Trade in Real Time</p>
              <span>
                Trades placed during market hours are executed in real time, so
                you’ll always know the share price.
              </span>
            </section>
          </div>

          <div>
            <form onClick={this.handleSubmit} className="add-email-form">
              {/* add on change eventually for email submit */}
              <input
                type="text"
                placeholder="name@email.com"
              />
              <Link className="button-green" to={""}>
                Get Access Now
              </Link>
            </form>
          </div>
          {this.props.disclosure}
        </section>

        <div className="splash-c3-img">
          <img src="https://robins-jacket-dev.s3.amazonaws.com/images/splash_shapes.png" draggable="false" />
        </div>
      </div>
    );
  }
}

export default SplashCompThree;
