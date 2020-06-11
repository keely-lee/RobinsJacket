import React from 'react';
import { Link } from 'react-router-dom';

//ARRAY OF SAMPLE USERS FOR DEMO //

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      funds_available: "",
      displayHidden: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
  };

  componentWillUnmount(){
    this.props.clearErrors();
    
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    if (this.props.formType === "signup" && user.email === "hiringmanager@gmail.com") this.props.demoUser(user)
    else this.props.processForm(user)
  }

  update(field){
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  demoUser(e) {
    const user = { email: "hiringmanager@gmail.com", password: "password4", funds_available: 99999999, fname: "Keely", lname: "Lee" }

    return () => {
      this.setState(user)
    }
  }

  displayHidden(){
    this.setState({displayHidden: true})
  }

  displayErrors(){
    let session = this.props.formType;

    return (
      <ul className={`${session}-error-list`}>
        { this.props.errors.map ((error, idx) => {
          return <li key={`error-${idx}`} id={`error-${idx}`}>{error}</li>
        }) }
      </ul>
    )
  }


  render(){
    // shared items, value change on signup/login
    let session = this.props.formType;
    let otherLink;
    let otherLinkText;
    let otherLinkLinkText;
    let sessionHeader;
    let submitButton;
    let baseColor;
    let placeholderEmail;
    let placeholderPW;
    let labelEmail;
    let labelPW;
    if (this.props.formType === 'login') {
      otherLink = "signup";
      sessionHeader = "Welcome to RobinsJacket";

      submitButton = "Sign In";
      baseColor = "lgreen";
      labelEmail = "Email or username";
      labelPW = "Password"
      placeholderEmail = "";
      placeholderPW = "";
      otherLinkText = "Get started ";
      otherLinkLinkText = "Create an account today";
    }
    else {
      otherLink = "login";
      sessionHeader = "Make Your Money Move";
      submitButton = "Continue";
      baseColor = "sblue";
      placeholderEmail = "Email";
      placeholderPW = "Password (min. 8 characters)";
      otherLinkText = "Already a member?";
      otherLinkLinkText = "Log In to start trading";
    }

    return (

      <div className={`${session}-main-div`}>

        {this.props.formType === "signup" ? (
          <div className="signup-nav-bar">
            {/* <img src="" draggable="false" className="logo-small" /> */}
            <Link className="logo-small signup-logo" to=""><img src={window.small_logo} className="logo-small signup-logo" draggable="false" /></Link>
            <div className="signup-nav-text">
              <span className="signup-nav-txt-account">Account</span>
              <span className="signup-nav-txt-basic">Basic Info</span>
              <span className="signup-nav-txt-identity">Identity</span>
              <span className="signup-nav-txt-funding">Funding</span>
              <span className="signup-nav-txt-submit">Submit</span>
            </div>
          </div>
        ) : ""}

        <form onSubmit={ this.handleSubmit } className={`${session}-form-tag`}>

          {/* <div className="div-wrap"> */}
          <div className={`div-other-${session}`}>

            <div className={`div-inside-${session}`}>
              {/* shared between signup/login*/}
              <h2 className={`${session}-header`}>{sessionHeader}</h2>

              { this.props.formType === 'signup' ? (
                <div className="signup-top">
                  <p className={`${session}-paragraph`}>RobinsJacket lets you invest in companies you trust, commission-free.</p> 
                  
                  <div className={`${session}-names`}>
                    <input type="text"
                      value={this.state.fname}
                      placeholder="First name"
                      onChange={this.update("fname")}
                      className={`${session}-input ${session}-fname`} />

                    <input type="text"
                      value={this.state.lname}
                      placeholder="Last name"
                      onChange={this.update("lname")}
                      className={`${session}-input ${session}-lname`} />
                  </div>
                </div>
              ) : "" }

              <p className={`${session}-labelEmail`}>{labelEmail}</p>
                <input type="text"
                  value={this.state.email} 
                  placeholder={`${placeholderEmail}`}
                  onChange={this.update("email")}
                  className={`${session}-input ${session}-email`}/>
                
              <p className={`${session}-labelPW`}>{labelPW}</p>
                <input type="password" 
                  value={this.state.password} 
                  placeholder={`${placeholderPW}`}
                  onChange={this.update("password")}
                  className={`${session}-input ${session}-password`}/>
              {/* shared between signup/login ends here */}

                { this.props.formType === 'signup' ? "" : (
                    <Link to="" className={`link-${baseColor}-only forgot`}>Forgot your username or password?</Link>
                ) }

              {/* shared between signup/login  */}
              <div className={`session-${session}-buttons`}>
                <button className={`button-${baseColor} ${session}-submit`}>{submitButton}</button>
                <button className={`button-${baseColor}`} onClick={this.demoUser()}>Demo User</button>
              </div>  

              <div className={`${session}-errors-div`}>
                {this.props.errors ? this.displayErrors() : ""} 
              </div>
              <div className="other-link-div">
                  <span className="other-link-text">{otherLinkText}</span>
                  <Link to={`/${otherLink}`} className={`link-${baseColor}-only other-link`}>{otherLinkLinkText}</Link>
                </div>
            </div> 
          </div> 

          <div className={`${session}-img`}>
            { this.props.formType === "login" ? (
            <img src={window.login_page} draggable="false" className={`${session}-image`}/> 
            ) : (
            <div className="right-nav-video">
              <video autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" className={`${session}-video`} width="315" height="175">
                <source src={window.signup_video} type="video/mp4" ></source>
              </video> 
              
              <div className="signup-after-vid">
                <p className="video-text">We’ve cut the fat that makes other brokerages costly, like manual account management and hundreds of storefront locations, so we can offer zero commission trading.</p>

                <button className="video-button link-sblue-only" type="button" onClick={() => {console.log("CLICK"); this.displayHidden()}}>View commission disclosures</button>

                { this.state.displayHidden ? (
                  <p className="video-text-hidden">commission-free trading refers to $0 commissions for RobinsJacket Inc self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or the web. Relevant SEC <br/> &amp; FINRA fees may apply. Please <br/> see our <span className="link-sblue-only">Fee Schedule.</span></p>
                ) : null }
              </div>
            </div>
            ) }
          </div>
            
          {/* </div> div wrap */}
          {/* shared between signup/login ends here */}
        </form>

        { this.props.formType === 'signup' ? (
          <div className={`${session}-footer`}>
            <p>All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing.</p>
            <p>All securities and investments are offered to self-directed customers by RobinsJacket Incorporated, member <Link to="/loremips" className="link-sblue-only">FINRA</Link> &amp; <Link to="/loremips" className="link-sblue-only">SIPC.</Link> Additional information about your broker can be found by clicking <Link to="/loremips" className="link-sblue-only">here</Link>. RobinsJacket Incorporated is a wholly owned subsidiary of RobinsMarkets, Inc.</p>
            <p>Check the background of RobinsJacket Incorporated and RobinsJacket Securities, LLC on <Link to="/loremips" className="link-sblue-only">FINRA's BrokerCheck</Link>.</p>
            <p><Link to="/loremips" className="footer-link link-sblue-only">RobinsJacket Terms &amp; Conditions</Link><Link to="/loremips" className="footer-link link-sblue-only">Disclosure Library</Link><Link to="/loremips" className="footer-link link-sblue-only">Contact Us</Link><Link to="/loremips" className="footer-link link-sblue-only">FAQ</Link></p>
            <p>© March 2020 RobinsJacket. All rights reserved.</p>
          </div>
          ) : ""
        }
      </div> //first div
    ) //close return
  }
}

export default SessionForm;