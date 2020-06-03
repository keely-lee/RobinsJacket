import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  update(field){
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
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
          {/* <input type="submit" value={this.props.formType} /> */}
        </form>
      </div>
    )
  }
}

export default SessionForm;