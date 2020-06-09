import React from 'react';
import { Link } from 'react-router-dom';
import UserHomeContainer from '../user_home/user_home_container';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.currentUser ? (
        <div>
          {/* <h2>Welcome {this.props.currentUser.fname}!</h2> */}

          <UserHomeContainer/>
        </div>
      ) : (

        // insert what we want to stick if not logged
        <div></div>
      )
    )
  }
}

export default Greeting;