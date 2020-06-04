import React from 'react';
import { Link } from 'react-router-dom';

import SplashCompOne from '../splash/splash_comp_one'
import SplashCompTwo from '../splash/splash_comp_two';
import SplashCompThree from '../splash/splash_comp_three';

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <div className="splash-1">
          <SplashCompOne />
        </div>
        <div className="splash-2">
          <SplashCompTwo />
        </div>
        <div className="splash-3">
          <SplashCompThree />
        </div>
      </div>
    )
  }

}

export default Splash;