import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = () => {
  return (
    <div className="splash">
      <nav className="navbar-main cf" >
        <div className="navbar-home">
          <Link to="/"><img src={window.logo} className="main-logo"/></Link>
        </div>

        <div className="navbar-right-links">
          <Link className="button-green" to={"/signup"}>Sign Up</Link>
          <Link className="link-plain" to={"/login"}>Sign In</Link>
        </div>
      </nav>

    </div>
  )
}

export default SplashNav;