import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = () => {
  return (
    <div className="splash">
      <nav className="navbar-main cf" >
        <div className="navbar-home">
          <Link to="/"><img src={window.logo} className="main-logo"/></Link>
          <button type="button" className="navbar-dropdown">Products <i className="fa fa-angle-down" aria-hidden="true"></i></button>  {/*{'\u02c5'}*/}
          <a href="https://www.linkedin.com/in/keely-lee1/" className="linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/keely-lee" className="github"><i className="fab fa-github"></i></a>
        </div>

        <a href=""></a>

        <div className="navbar-right-links">
          <Link className="button-green" to={"/signup"}>Sign Up</Link>
          <Link className="link-plain" to={"/login"}>Sign In</Link>
        </div>
      </nav>









    </div>
  )
}

export default SplashNav;