import React from 'react';
import { Link } from 'react-router-dom';

import SplashCompOne from '../splash/splash_comp_one'
import SplashCompTwo from '../splash/splash_comp_two';
import SplashCompThree from '../splash/splash_comp_three';
import SplashNav from './splash_nav';
import SplashCompFour from './splash_comp_four';
import SplashCompSix from './splash_comp_six';

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <nav className="splash-nav">
          <SplashNav />
        </nav>
        <div className="splash-1">
          <SplashCompOne />
        </div>
        <div className="splash-2">
          <SplashCompTwo 
            // disclosure={this.props.otherForm}
            disclosure={this.props.commissions}
            closeModal={this.props.closeModal}/>
        </div>
        <div className="splash-3">
          <SplashCompThree 
            disclosure={this.props.fractional}
            closeModal={this.props.closeModal}
          />
        </div>
        <div className="splash-4">
          <SplashCompFour/>
        </div>
        {/* SPLASH COMP FIVE */}
        <div className="splash-6">
          <SplashCompSix/>
        </div>
      </div>
    )
  }

}

export default Splash;