import React from "react";
import { Link } from "react-router-dom";

class UserHomeNav extends React.PureComponent {
  /*
    This component is shared by:
      - Home: "/" (general stock info)
      - Portfolio Home: "/portfolio"
          * Submitting ticker search navigates to portfolio stock page
      - Portfolio Stock: "/stock/:id" (user's stock transactions)
  */
  constructor(props) {
    super(props);
    this.state = {
      accountDropdown: false,
      messageDropdown: false,
      contact: false,
      ticker: "NDAQ",
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleCloseNavs = this.handleCloseNavs.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }

  updateSearch(e) {
    this.setState({ ticker: e.currentTarget.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.getStock(this.state.ticker);
  }

  // TODO KL: smartSearch dropdown stocks list
  // smartSearch() {}

  handleDropdown(dropdown) {
    // TODO KL: clean this up. Add renderContact to this fn
    this.setState({ [dropdown]: !this.state[dropdown] });

    // this.handleClose(dropdown);
    if (dropdown === "accountDropdown") {
      this.setState({
        messageDropdown: false,
        contact: false,
      });
    } else {
      this.setState({
        accountDropdown: false,
        contact: false,
      });
    }
  }

  handleCloseNavs() {
    this.setState({
      accountDropdown: false,
      messageDropdown: false,
      contact: false,
    });
  }

  renderContact() {
    // TODO KL: add this fn to handleDropdown
    this.setState({ contact: !this.state.contact });
  }

  render() {
    return (
      <div className="home-navbar-main">
        <Link to="/">
          <img
            src={window.logo_icon}
            className="logo-small home-logo"
            draggable="false"
          />
        </Link>

        <div className="user-search-wrap">
          <form onSubmit={this.handleSearch}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              className="navbar-stock-search"
              placeholder="Enter Ticker"
              onChange={this.updateSearch}
            />
            <button className="home-nav-submit-button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <div className="home-navbar-right">
          <Link
            type="button"
            className="home-nav-button home-nav-portfolio"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <button
            type="button"
            className="home-nav-button home-nav-messages"
            onClick={() => this.handleDropdown("messageDropdown")}
            onBlur={() => this.handleCloseNavs()}
          >
            Messages
          </button>
          <button
            type="button"
            className="home-nav-button home-nav-account"
            onClick={() => this.handleDropdown("accountDropdown")}
          >
            Account
          </button>
        </div>

        {/* ACCOUNT DROPDOWN */}
        {this.state.accountDropdown ? (
          <div className={`account-dropdown`}>
            <span className="account-dropdown-user">
              {this.props.currentUser.first_name} {this.props.currentUser.last_name}
            </span>
            <button type="button">
              <i className="far fa-question-circle home-icon"></i> Help Center
            </button>
            <button type="button" onClick={() => this.renderContact()}>
              <i className="far fa-id-badge home-icon"></i> Contact Us
            </button>

            {this.state.contact ? (
              <div className="contact-div">
                <span className="contact-name">Keely Lee</span>

                <a
                  href="mailto:keely_lee@outlook.com"
                  className="contact-email"
                >
                  keely_lee@outlook.com
                </a>
                <a
                  href="https://www.linkedin.com/in/keely-lee1/"
                  className="contact-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
                {/* TODO: make resume modal */}
              </div>
            ) : null}

            <button type="button">
              <i className="fas fa-align-justify home-icon"></i> Disclosures
            </button>
            <button
              type="button"
              onClick={() => this.props.logout()}
              className="home-logout"
            >
              <i className="fas fa-external-link-alt home-icon"></i> Logout
            </button>
          </div>
        ) : null}

        {/* MESSAGES DROPDOWN */}
        {this.state.messageDropdown ? (
          <div className="messages-dropdown">
            <span className="messages-dropdown-label">Messages</span>
            <button type="button" className="home-msg-button">
              <div className="home-msg">
                <img
                  src="https://robins-jacket-dev.s3.amazonaws.com/images/home_msg.png"
                  draggable="false"
                  className="home-msg-img"
                />
                <div className="home-msg-text">
                  <h4>Announcements</h4>
                  <span>
                    <i className="fas fa-hand-point-right"></i> Hi there!
                    Welcome to RobinsJacket, let's get you started
                  </span>
                </div>
              </div>
            </button>
            <button type="button" className="home-view-all">
              View All Messages
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserHomeNav;
