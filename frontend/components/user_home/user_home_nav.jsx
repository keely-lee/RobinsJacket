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

    // this.handleSearch = this.handleSearch.bind(this);
    // this.renderContact = this.renderContact.bind(this);
    // this.handleCloseNavs = this.handleCloseNavs.bind(this);
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

  handleCloseNavs(){
    this.setState( {
      accountDropdown: false,
      messageDropdown: false,
      contact: false,
    })
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
        <Link to="/" className="home-logo-link"><img src={window.small_logo} className="logo-small home-logo" draggable="false"/></Link>

        <div className="user-search-wrap">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" className="navbar-stock-search" placeholder="Search"
          onChange={ () => { this.handleSearch(); this.handleCloseNavs() } }/>
        </div>

        <div className="home-navbar-right">
          <button type="button" className="home-nav-button home-nav-portfolio" onClick={ () => this.handleCloseNavs() }>Portfolio</button>
          <button type="button" className="home-nav-button home-nav-cash" onClick={() => this.handleCloseNavs()}>Cash</button>
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


        {/* MESSAGES DROPDOWN */}
        { this.state.messageDropdown ? (
          <div className="messages-dropdown">
            <span className="messages-dropdown-label">
              Messages
            </span>
            <button type="button" className="home-msg-button">
              <div className="home-msg">
                <img src={window.home_msg} draggable="false" className="home-msg-img"/>
                <div className="home-msg-text">
                  <h4>Announcements</h4>
                  <span><i className="fas fa-hand-point-right"></i> Hi there! Welcome to RobinsJacket, let's get you started</span>
                </div>
              </div>
            </button>
            <button type="button" className="home-view-all">
              View All Messages
            </button>
          </div>
        ) : null }



      </div>
    )
  }



}

export default UserHomeNav;