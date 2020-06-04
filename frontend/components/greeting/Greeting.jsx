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
        <div className="splash">
          <nav className="navbar-main cf" >
            <div className="navbar-home">
              <Link to="/" className="button-black">
                HOME
              </Link>
            </div>

            <div className="navbar-right-links">
                <Link className="button-green" to={"/signup"}>Sign Up</Link>
                <Link className="link-plain" to={"/login"}>Sign In</Link>
            </div>
          </nav>

        </div>
      )
    )
  }
}

export default Greeting;