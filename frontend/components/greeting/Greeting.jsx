import React from 'react';
import { Link } from 'react-router-dom';

import SplashCompOne from '../splash/splash_comp_one'
import SplashCompTwo from '../splash/splash_comp_two';
import SplashCompThree from '../splash/splash_comp_three';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.currentUser ? (
        <div>
          <h2>Welcome {this.props.currentUser.fname}!</h2>
          <button onClick={ () => {this.props.logout()} }>Logout</button>
        </div>
      ) : (
        <div className="splash">
          <nav className="navbar-main cf" >
            <div className="navbar-home">
              <Link to="/" className="button-black">
                HOME
              </Link>
            </div>

            <div className="navbar-right-links">
                <Link className="button-green" to={"/signup"}>Sign Up</Link>
                <Link className="link-plain" to={"/login"}>Sign In</Link>
            </div>
          </nav>

          <div className="splash-1">
            <SplashCompOne />
          </div>
          <div className="splash-2">
            <SplashCompTwo />
          </div>
          <div className="splash-3">
            <SplashCompThree />
          </div>
        </div>
      )
    )
  }
}

export default Greeting;