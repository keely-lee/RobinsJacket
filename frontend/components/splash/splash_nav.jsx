import React from "react";
import { Link } from "react-router-dom";

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productDropdown: false };
    this.handleProductDropdown = this.handleProductDropdown.bind(this);
    // this.handleProductRemove = this.handleProductRemove.bind(this);
  }

  handleProductDropdown() {
    if (this.state.productDropdown === false) {
      this.setState({ productDropdown: true });
    } else {
      this.setState({ productDropdown: false });
    }
  }

  // handleProductRemove(){
  //   if (this.state.productDropdown) {
  //     this.setState({ productDropdown: false })
  //   }
  // }

  render() {
    let caret;
    if (this.state.productDropdown) {
      caret = <i className="fa fa-angle-up" aria-hidden="true"></i>;
    } else {
      caret = <i className="fa fa-angle-down" aria-hidden="true"></i>;
    }

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
              onClick={() => this.handleProductDropdown()}
            >
              Products {caret}
            </button>
            <a
              href="https://www.linkedin.com/in/keely-lee1/"
              className="linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/keely-lee"
              className="github"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://keely-lee.github.io/"
              className="personal"
              target="_blank"
            >
              <i className="fas fa-user-circle"></i>
            </a>
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
