import React from 'react';
import { Link } from 'react-router-dom'

class UserHomeNav extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      accountDropdown: false,
      messageDropdown: false,
      contact: false,
     };
    //will need state for searchbar

    this.handleSearch = this.handleSearch.bind(this);
    this.renderContact = this.renderContact.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  handleDropdown(dropdown){
    if (this.state[dropdown] === false) {
      this.setState({ [dropdown]: true})
      console.log(this.state)
    } else {
      this.setState( { [dropdown]: false })
    }

    // this.handleClose(dropdown);
    if (dropdown === 'accountDropdown') {
      this.setState({ 
        messageDropdown: false,
        contact: false,
      })

    } else {
      this.setState( { 
        accountDropdown: false, 
        contact: false,
      })
    } 
  }

  renderContact(){
    if (this.state.contact === false) this.setState({contact: true})
    else this.setState({contact: false})
  }

  // handleClose(dropdown){
  //   this.setState({
  //     accountDropdown: false,
  //     messageDropdown: false,
  //     contact: false,

  //     [dropdown]: true,
  //   })
  // }

  //handleSearch dropdown stocks
  handleSearch(){
  }

  render(){

    return (
      <div className="home-navbar-main">
        <Link className="logo-small home-logo" to="/">TEMP BUTTON</Link>

        <div className="user-search-wrap">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" className="navbar-stock-search" placeholder="Search"
          onChange={ () => this.handleSearch() }/>
        </div>

        <div className="home-navbar-right">
          <button type="button" className="home-nav-button home-nav-portfolio">Portfolio</button>
          <button type="button" className="home-nav-button home-nav-cash">Cash</button>
          <button type="button" className="home-nav-button home-nav-messages" onClick={ () => this.handleDropdown('messageDropdown') }>Messages</button>
          <button type="button" className="home-nav-button home-nav-account" onClick={ () => this.handleDropdown('accountDropdown') }>Account</button>
        </div>

        {/* ACCOUNT DROPDOWN */}
        { this.state.accountDropdown ? (
          <div className={`account-dropdown`}>
            <span className="account-dropdown-user">
              {this.props.currentUser.fname} {this.props.currentUser.lname}
            </span>
            <button type="button">
              <i className="far fa-question-circle home-icon"></i>  Help Center
            </button>
            <button type="button" onClick={() => this.renderContact()}>
              <i className="far fa-id-badge home-icon"></i>  Contact Us
            </button>

            { this.state.contact ? (
              <div className="contact-div">
                <span className="contact-name">Keely Lee</span>

                <a href="mailto:keely_lee@outlook.com" className="contact-email">keely_lee@outlook.com</a>
                <a href="https://www.linkedin.com/in/keely-lee1/" className="contact-more">
                  More Info
                </a>
                { /* MAKE RESUME MODAL*/}
              </div>
            ) : null }

            <button type="button">
              <i className="fas fa-align-justify home-icon"></i>  Disclosures
            </button>
            <button type="button" onClick={() => this.props.logout()} className="home-logout">
              <i className="fas fa-external-link-alt home-icon"></i>  Logout
            </button>
          </div>
        ) : null }


        {/* ACCOUNT DROPDOWN */}
        { this.state.messageDropdown ? (
          <div className="messages-dropdown">
            <span className="messages-dropdown-label">
              Messages
            </span>
            <button type="button">
              <div className="home-msg">
                <img src={window.home_msg} draggable="false" className="home-msg-img"/>
                <h6>Announcements</h6>
                <span className="home-msg-text"><i className="fas fa-hand-point-right"></i> Hi there! Welcome to RobinsJacket, let's get you started</span>
              </div>
            </button>
            <button type="button">
              View All Messages
            </button>
          </div>
        ) : null }



      </div>
    )
  }



}

export default UserHomeNav;