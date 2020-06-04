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
    let otherLink;
    if (this.props.formType === 'login') {
      otherLink = "signup"; }
    else { otherLink = "login"; }

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <h2>{this.props.formType}</h2>
          <Link to={`/${otherLink}`}>{otherLink}</Link><br/>

          <input type="text"
            value={this.state.email} 
            placeholder="email"
            onChange={this.update("email")}/>
          <br/>
          
          <input type="password" 
            value={this.state.password} 
            placeholder="password"
            onChange={this.update("password")}/>
          <br/>
          { this.props.formType === 'login' ? (
            <div>
              <Link to="" className="link-plain">Forgot your username or password?</Link>
            </div>
          ) : ("") }

          { this.props.formType === 'signup' ? ( 
            <div> 
              <input type="text"
                value={ this.state.fname }
                placeholder="first name"
                onChange={this.update("fname")}/><br/>

              <input type="text"
                value={this.state.lname}
                placeholder="last name"
                onChange={this.update("lname")}/><br/>
            </div>
          ) : ("") }
          <button className="session-submit button-green">{this.props.formType}</button>
          <button className="button-green" onClick={this.demoUser()}>Demo User</button>
          { this.props.errors ? this.displayErrors() : "" }
          {/* <input type="submit" value={this.props.formType} /> */}
        </form>
      </div>
    )
  }
}

export default SessionForm;