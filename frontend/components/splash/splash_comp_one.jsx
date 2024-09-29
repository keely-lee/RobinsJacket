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
        src="https://robins-jacket-dev.s3.amazonaws.com/videos/splash_vid.mp4"
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
        src="https://robins-jacket-dev.s3.amazonaws.com/images/splash_phone.png"
        draggable="false"
        alt="RJ"
        className="splash-phone"
      />
    </div>
  </div>
);

export default SplashCompOne;
