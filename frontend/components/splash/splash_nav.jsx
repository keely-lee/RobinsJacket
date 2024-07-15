import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productDropdown: false };
    this.handleProductDropdown = this.handleProductDropdown.bind(this);
  }

  handleProductDropdown() {
    this.setState({ productDropdown: !this.state.productDropdown})
  }

  render() {
    return (
      <div className="splash">
        <nav className="navbar-main cf">
          <div className="navbar-splash">
            <Link to="/">
              <img src={window.logo} className="main-logo" />
            </Link>
            <button
              type="button"
              className="navbar-dropdown"
              onClick={this.handleProductDropdown}
            >
              Products {<i aria-hidden="true"
                className={classNames({
                  "fa fa-angle-up": this.state.productDropdown,
                  "fa fa-angle-down": !this.state.productDropdown,
                })}></i>}
            </button>
            <a href="https://www.linkedin.com/in/keely-lee1/" className="linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/keely-lee" className="github" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://angel.co/u/keely-lee" className="angellist" target="_blank"><i className="fab fa-angellist"></i></a>
            <a href="https://keely-lee.github.io/" className="personal" target="_blank"><i className="fas fa-user-circle"></i></a>
          </div>

          <div className="navbar-right-links">
            <Link className="button-green" to={"/signup"}>
              Sign Up
            </Link>
            <Link className="link-plain" to={"/login"}>
              Sign In
            </Link>
          </div>

          {this.state.productDropdown ? (
            <div className="navbar-main dropdown">
              <ul className="navbar-dropdown-ul">
                <a className="navbar-stocks navbar-list">Stocks &amp; Funds</a>
                <a className="navbar-options navbar-list">Options</a>
                <a className="navbar-gold navbar-list">Gold</a>
                <a className="navbar-cash navbar-list">Cash Management</a>
                <a className="navbar-crypto navbar-list">Crypto</a>
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    );
  }
}

export default SplashNav;
