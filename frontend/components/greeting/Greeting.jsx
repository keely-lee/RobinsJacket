import React from 'react';
import { Link } from 'react-router-dom';
import UserHomeContainer from '../user_home/user_home_container';
import SplashContainer from '../splash/splash_container';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.currentUser ? <UserHomeContainer/> : <SplashContainer/>
    )
  }
}

export default Greeting;