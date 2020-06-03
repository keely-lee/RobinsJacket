import React from 'react';
import { Link } from 'react-router-dom';

//no props, just sign up link
class SplashCompOne extends React.Component {

  render(){
    return (
      <div className="splash-comp-one">
        <div className="col-1-2">
          <h3>Investing for All</h3>
          <p>RobinsJacket, a leader in commission-free investing, offers you infinite ways to make your money work for you</p>
          <Link to={"/login"}>Sign Up</Link>
        </div>
        <div className="col-2-2 phone-img">
          <img src="https://cdn.robinhood.com/assets/robinhood/brand/350f48095cefa5b4a8139e5797e5232d-1x.png" draggable="false" alt="RJ" />
        </div>
      </div>
    )
  }
}

export default SplashCompOne;