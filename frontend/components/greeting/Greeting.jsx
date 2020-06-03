import React from 'react';
import { Link } from 'react-router-dom';

import SplashCompOne from '../splash/splash_comp_one'

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
          <nav className="navbar-main" >
            <div className="navbar-right-links">
              <Link id="navbar-signup" to={"/signup"}>Sign Up</Link><br />
              <Link id="navbar-login" to={"/login"}>Sign In</Link><br />
            </div>
          </nav>

          <div className="splash-1">
            <SplashCompOne />
          </div>
        </div>
      )
    )
  }
}

export default Greeting;