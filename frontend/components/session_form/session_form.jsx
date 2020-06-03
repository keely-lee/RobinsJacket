import React from 'react';

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
    if (this.props.formType === 'login') let otherLink = "signup";
    else let otherLink = "login";

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <h2>{this.props.formType}</h2>

        </form>
          <Link to={`/${otherLink}`}></Link>

          <ul>
            <p>Here are some errors: </p>
            { this.props.errors.map ( (error, i) => {
              <li key={i}>{error}</li>
            } ) } 
        </ul>

        <label for="email">Email: </label>
        <input type="text" id="email" value={this.state.email} onChange={this.update("email")}/>
        <br/>

        <label for="password">Password: </label>
        <input type="password" id="password" value={this.state.password} onChange={this.update("password")}/>
        <br />
        
        <button value={this.props.formType}></button>
      </div>
    )
  }
}

export default SessionForm;