import React from 'react';
import { Link } from 'react-router-dom';


class SplashCompThree extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //may need state for email input
  //need state for modal

  handleSubmit(e){
    e.preventDefault();
  }

  render () {
    return (
      <div className="splash-comp-three">
        <section className="splash-comp-three-left">
          <h2>Introducing Fractional Shares</h2>
          <span>Invest in thousands of stocks with just $1.</span>

          <div className="splash-comp-three-spans">
            <section className="section-one">
              <p className="splash-three-header">Invest Any Amount</p>
              <span className="splash-three-blurb">Choose how much you want to invest, and we’ll convert from dollars to shares</span>
            </section>
            <section className="section-two">
              <p className="splash-three-header">Build Your Portfolio</p>
              <span className="splash-three-blurb">Customize your portfolio, allocate assets from aggressive to passive.</span>
            </section>
            <section className="section-three">
              <p className="splash-three-header">Trade in Real Time</p>
              <span className="splash-three-blurb">Trades placed during market hours are executed in real time, so you’ll always know the share price.</span>
            </section>
          </div>

          <div >
            <form onClick={this.handleSubmit} className="add-email-form" >
              {/* add on change eventually for email submit */}
              <input type="text" className="add-email-input" placeholder="name@email.com" />
              <Link className="button-green" to={""}>Get Access Now</Link>
            </form>
          </div>

          {this.props.disclosure}
        </section> 

        <div className="splash-comp-three-image">
          <img src="https://cdn.robinhood.com/assets/robinhood/brand/9bf2eedf2bf4ef27c963df3c01f7d16e-3x.png" draggable="false"/>

        {/* {/https://cdn.robinhood.com/assets/robinhood/brand/0fb7985440ef7ab6794b97c64814f049-1x.png)} */}
        </div>

      </div>
    )
  }
}

export default SplashCompThree;