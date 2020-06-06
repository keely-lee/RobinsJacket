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
      funds_available: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
    // this.demoUser = this.demoUser.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
      // .then(() => {this.props.history.push("/")}) //quickfix
  }

  update(field){
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  demoUser(e) {
    // if (formType === 'signup') this.props.destroyDemo(); NEED TO CREATE THIS FUNCTION OR ELSE DEMO DOES NOT WORK ON SIGN UP!!

    const user = { email: "hiringmanager@gmail.com", password: "password4", funds_available: 99999999, fname: "Keely", lname: "Lee" }

    return () => {
      this.setState(user)
    }
  }

  displayErrors(){
    return (
      <ul className="login-error-list">
        { this.props.errors.map ((error, idx) => {
          return <li key={`error #${idx}`}>{error}</li>
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
      otherLinkLinkText = "Log In to Get Started";
    }

    return (

      <div className={`${session}-form`}>

        {this.props.formType === "signup" ? (
          <div className="signup-nav-bar">
            {/* <img src="" draggable="false" className="logo-small" /> */}
            <button className="logo-small">TEMP BUTTON</button>
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

                <div className="other-link-div">
                  <span className="other-link-text">{otherLinkText}</span>
                  <Link to={`/${otherLink}`} className={`link-${baseColor}-only other-link`}>{otherLinkLinkText}</Link>
                  { this.props.errors ? this.displayErrors() : "" } 
                </div>
              </div> 
          </div> 

          <div className={`${session}-img`}>
            { this.props.formType === "login" ? (
            <img src="https://cdn.pixabay.com/photo/2017/02/22/18/00/ribbon-2090118_1280.jpg" draggable="false" className={`${session}-image`}/> 
            ) : (
            <video autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" className={`${session}-video`}>
              <source src="https://static.videezy.com/system/resources/previews/000/019/008/original/ICON-VERSION6.mp4" type="video/mp4"></source>
            </video> ) }
          </div>

          {/* </div> div wrap */}
          {/* shared between signup/login ends here */}
        </form>
      </div> //first div
    ) //close return
  }
}

export default SessionForm;