import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
  fname: "",
  lname: "",
  funds_available: 0,
};

function SignupForm({ demoUser, processForm, errors, clearErrors }, _props) {
  const [user, setUser] = useState(initialUser);
  const [hidden, setHidden] = useState(false);
  useEffect(() => clearErrors, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (user.email === "acarnegie@gmail.com") demoUser(user);
    else processForm(user);
  }

  function handleInput(field) {
    return function (e) {
      setUser({
        ...user,
        [field]: e.currentTarget.value,
      });
    };
  }

  function demo(_e) {
    setUser({
      email: "acarnegie@gmail.com",
      password: "password1",
      fname: "Andrew",
      lname: "Carnegie",
    });
  }

  function displayErrors() {
    return (
      <ul className="signup-error-list">
        {errors.map((error, idx) => (
          <li key={`error-${idx}`} id={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="signup-main-div">
      <div className="signup-nav-bar">
        <Link to="/">
          <img
            src={window.small_logo}
            className="logo-small"
            draggable="false"
          />
        </Link>
        <div className="signup-nav-text">
          <span>Account</span>
          <span>Basic Info</span>
          <span>Identity</span>
          <span>Funding</span>
          <span>Submit</span>
        </div>
      </div>

      <div className="signup-body">
        <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <h2>Make Your Money Move</h2>
            <p>
              RobinsJacket lets you invest in companies you trust, <br />{" "}
              commission-free.
            </p>

            <div className="signup-names">
              <input
                type="text"
                value={user.fname}
                placeholder="First name"
                onChange={handleInput("fname")}
              />
              <input
                type="text"
                value={user.lname}
                placeholder="Last name"
                onChange={handleInput("lname")}
              />
            </div>

            <input
              type="text"
              value={user.email}
              placeholder="Email"
              onChange={handleInput("email")}
              className="signup-input"
            />
            <input
              type="password"
              value={user.password}
              placeholder="Password (min. 8 characters)"
              onChange={handleInput("password")}
              className="signup-input"
            />

            <div className="signup-buttons">
              <button>Continue</button>
              <button onClick={demo}>Demo User</button>
            </div>

            <div>{errors ? displayErrors() : ""}</div>
            <div className="other-link-div">
              <span>Already a member?</span>
              <Link to={"/login"}>Log In to start trading</Link>
            </div>
          </div>
        </form>

        <section className="signup-video-section">
          <video
            autoPlay
            controlsList="nodownload nofullscreen noremoteplayback"
            loop
            muted
            playsInline
            preload="auto"
            width="315"
            height="175"
          >
            <source src="https://robins-jacket-dev.s3.amazonaws.com/videos/signup_video.mp4" type="video/mp4"></source>
          </video>

          <div className="signup-below-vid">
            <p>
              We&apos;ve cut the fat that makes other brokerages costly, like
              manual account management and hundreds of storefront locations, so
              we can offer zero commission trading.
            </p>

            <button
              className="signup-blue-link"
              type="button"
              onClick={function () {
                setHidden(!hidden);
              }}
            >
              View commission disclosures
            </button>

            {hidden ? (
              <p>
                Commission-free trading refers to $0 commissions for
                RobinsJacket Inc self-directed individual cash or margin
                brokerage accounts that trade U.S. listed securities via mobile
                devices or the web. Relevant SEC <br /> &amp; FINRA fees may
                apply. Please <br /> see our{" "}
                <span className="signup-blue-link">Fee Schedule.</span>
              </p>
            ) : null}
          </div>
        </section>
      </div>

      <div className="signup-footer">
        <p>
          All investments involve risk and the past performance of a security,
          or financial product does not guarantee future results or returns.
          Keep in mind that while diversification may help spread risk it does
          not assure a profit, or protect against loss, in a down market. There
          is always the potential of losing money when you invest in securities,
          or other financial products. Investors should consider their
          investment objectives and risks carefully before investing.
        </p>
        <p>
          All securities and investments are offered to self-directed customers
          by RobinsJacket Incorporated, member <Link to="/loremips">FINRA</Link>{" "}
          &amp; <Link to="/loremips">SIPC.</Link> Additional information about
          your broker can be found by clicking <Link to="/loremips">here</Link>.
          RobinsJacket Incorporated is a wholly owned subsidiary of
          RobinsMarkets, Inc.
        </p>
        <p>
          Check the background of RobinsJacket Incorporated and RobinsJacket
          Securities, LLC on <Link to="/loremips">FINRA's BrokerCheck</Link>.
        </p>
        <p className="footer-links">
          <Link to="/loremips">RobinsJacket Terms &amp; Conditions</Link>
          <Link to="/loremips">Disclosure Library</Link>
          <Link to="/loremips">Contact Us</Link>
          <Link to="/loremips">FAQ</Link>
        </p>
        <p>© March 2020 RobinsJacket. All rights reserved.</p>
      </div>
    </div>
  );
}

export default SignupForm;
