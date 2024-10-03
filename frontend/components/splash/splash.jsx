import React from "react";

import SplashCompOne from "../splash/splash_comp_one";
import SplashCompTwo from "../splash/splash_comp_two";
import SplashCompThree from "../splash/splash_comp_three";
import SplashNav from "./splash_nav";
import SplashCompFour from "./splash_comp_four";
import SplashCompSix from "./splash_comp_six";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SplashNav />
        <SplashCompOne />
        <SplashCompTwo
          disclosure={this.props.commissions}
          closeModal={this.props.closeModal}
        />
        <SplashCompThree
          disclosure={this.props.fractional}
          closeModal={this.props.closeModal}
        />
        <SplashCompFour />
        <SplashCompSix />
      </div>
    );
  }
}

export default Splash;
