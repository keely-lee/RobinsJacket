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
          <div className="navbar-external">
            <Link to="/"><img src={window.logo}/></Link>
            <button
              type="button"
              onClick={this.handleProductDropdown}
            >
              Products {<i aria-hidden="true"
                className={classNames({
                  "fa fa-angle-up": this.state.productDropdown,
                  "fa fa-angle-down": !this.state.productDropdown,
                })}></i>}
            </button>
            <a href="https://www.linkedin.com/in/keely-lee1/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/keely-lee" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://angel.co/u/keely-lee" target="_blank"><i className="fab fa-angellist"></i></a>
            <a href="https://keely-lee.github.io/" target="_blank"><i className="fas fa-user-circle"></i></a>
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
            <div className="navbar-main products-dropdown">
              <ul>
                <a>Stocks &amp; Funds</a>
                <a>Options</a>
                <a>Gold</a>
                <a>Cash Management</a>
                <a>Crypto</a>
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    );
  }
}

export default SplashNav;
