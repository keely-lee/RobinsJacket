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

    const user = { email: "hiringmanager@outlook.com", password: "password", funds_available: 99999999, fname: "Keely", lname: "Lee" }

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
    let sessionHeader;
    let imgSrc;
    let submitButton;
    let baseColor;
    if (this.props.formType === 'login') {
      otherLink = "signup";
      sessionHeader = "Welcome to Robinhood";
      imgSrc = "https://cdn.pixabay.com/photo/2015/10/04/11/14/pink-970854_1280.jpg";
      submitButton = "Sign In";
      baseColor = "pink";
    }
    else {
      otherLink = "login";
      sessionHeader = "Make Your Money Move";
      imgSrc = "";
      submitButton = "Continue";
      baseColor = "";
    }

    return (

      <div className="session-form">
        <form onSubmit={ this.handleSubmit }>

          <div className="div-wrap">
          <div className="div-other">
            {/* shared between signup/login  */}
            <h2 className={`${session}-header`}>{sessionHeader}</h2>

            <input type="text"
              value={this.state.email} 
              placeholder="email"
              onChange={this.update("email")}
              className={`${session}-input ${session}-email`}/>
            
            <input type="password" 
              value={this.state.password} 
              placeholder="password"
              onChange={this.update("password")}
              className={`${session}-input ${session}-password`}/>
            {/* shared between signup/login ends here */}

            {/* this section for new users */}
            { this.props.formType === 'signup' ? ( 
              <div>
                <input type="text"
                  value={ this.state.fname }
                  placeholder="first name"
                  onChange={this.update("fname")}
                  className={`${session}-input ${session}-fname`}/>

                <input type="text"
                  value={this.state.lname}
                  placeholder="last name"
                  onChange={this.update("lname")}
                  className={`${session}-input ${session}-lname`}/>

                <p className={`${session}-paragraph`}>RobinsJacket lets you invest in companies you trust, commission-free.</p>
              </div>
            ) /* section for new users ends here */ : /*section for login users begins here */ (
                <Link to="" className={`link-${baseColor}-only forgot`}>Forgot your username or password?</Link>
            ) }
            

          {/* shared between signup/login  */}
            <button className={`button-${baseColor} ${session}-submit`}>{submitButton}</button>
            <button className={`button-${baseColor}`} onClick={this.demoUser()}>Demo User</button>
            <Link to={`/${otherLink}`} className={`link-${baseColor}-only other-link`}>{otherLink}</Link>
            { this.props.errors ? this.displayErrors() : "" } 
          </div>

          <div className="div-img">
            <img src={imgSrc} draggable="false" className={`${session}-image`}/>
          </div>
          </div> {/*div wrap*/}

        {/* shared between signup/login ends here */}

        </form>
      </div>
    )
  }
}



export default SessionForm;