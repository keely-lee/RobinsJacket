import React from "react";
import { Link } from "react-router-dom";

const SplashCompOne = () => (
  <div className="splash-comp-one">
    <div className="splash-c1-left">
      <p>Investing for </p>
      <p>All</p>
      <span>
        RobinsJacket, a leader in commission-free investing, offers you infinite
        ways to make your money work for you
      </span>
      <Link to={"/signup"} className="button-black">
        Sign Up
      </Link>
    </div>
    <div className="splash-c1-right">
      <video
        src={window.splash_vid}
        draggable="false"
        className="splash-video"
        autoPlay
        controlsList="nodownload nofullscreen noremoteplayback"
        loop
        muted
        playsInline
        preload="auto"
      />
      <img
        src={window.splash_phone}
        draggable="false"
        alt="RJ"
        className="splash-phone"
      />
    </div>
  </div>
);

export default SplashCompOne;
