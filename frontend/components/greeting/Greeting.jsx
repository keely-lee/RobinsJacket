import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.currentUser ? (
        <div>
          <h2>Welcome {this.props.currentUser.fname}!</h2>
          <button onClick={ () => {this.props.logout()} }>Logout</button>
        </div>
      ) : (
        <div>
          <Link to={"/api/users"}>Sign Up</Link><br />
          <Link to={"/api/session"}>Login</Link><br />
        </div>
      )
    )
  }
}

export default Greeting;