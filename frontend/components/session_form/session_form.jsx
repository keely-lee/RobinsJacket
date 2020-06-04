import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
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

  displayErrors (){
    return (
      <ul className="login-error-list">
        { this.props.errors.map ((error, idx) => {
          <li key={`error #${idx}`}>{error}</li>
        }) }
      </ul>
    )
  }

  render(){
    let otherLink;
    if (this.props.formType === 'login') {
      otherLink = "signup"; }
    else { otherLink = "login"; }

    // if (errors) {
    //   <ul>
    //     <p>Here are some errors: </p>
    //     { this.props.errors.map((error, i) => {
    //       return <li key={i}>{error}</li>
    //     })}
    //   </ul>
    // } render errors on page later
    
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
          <button>{this.props.formType}</button>
          { this.props.errors ? displayErrors() : "" }
          
          {/* <input type="submit" value={this.props.formType} /> */}
        </form>
      </div>
    )
  }
}

export default SessionForm;