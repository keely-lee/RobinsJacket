import React from 'react';
import { Link } from 'react-router-dom';

//no props, just sign up link
const SplashCompOne = () => {

  // render() => {
    return (
      <div className="splash-comp-one">
        <div className="col-1-2 splash-c1-left">
          <h1>Investing for All</h1>
          <span>RobinsJacket, a leader in commission-free investing, offers you infinite ways to make your money work for you</span>
          <Link to={"/signup"} className="button-black">Sign Up</Link>
        </div>
        <div className="col-2-2 splash-c1-right">
          <img src="https://cdn.robinhood.com/assets/robinhood/brand/350f48095cefa5b4a8139e5797e5232d-1x.png" draggable="false" alt="RJ" />
        </div>
      </div>
    )
  // }
}

export default SplashCompOne;