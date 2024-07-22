import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
  fname: "",
  lname: "",
  funds_available: 0,
}

function SignupForm ({formType, demoUser, processForm, errors, clearErrors}, props) {
  const [user, setUser] = useState(initialUser);
  const [hidden, setHidden] = useState(false);
  useEffect(() => clearErrors, []);

  function handleSubmit(e) {
    e.preventDefault();
    const currUser = Object.assign({}, user);

    if (user.email === "acarnegie@gmail.com") demoUser(user);
    else processForm(currUser);
  }

  function handleInput(field) {
    return function(e) {
      setUser({ 
        ...user,
        [field]: e.currentTarget.value 
      });
    };
  }

  function demo(_e) { // fix handleSubmit?
    setUser({ 
      email: "acarnegie@gmail.com", 
      password: "password1", 
      fname: "Andrew", 
      lname: "Carnegie" 
    })
  }

  function displayErrors() {
    return (
      <ul className='signup-error-lis'>
        {errors.map((error, idx) => (
          <li key={`error-${idx}`} id={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  const baseColor = "sblue";

  return (
    <div className={`${formType}-main-div`}>
      <div className="signup-nav-bar">
        {/* <img src="" draggable="false" className="logo-small" /> */}
        <Link className="logo-small signup-logo" to="/">
          <img
            src={window.small_logo}
            className="logo-small signup-logo"
            draggable="false"
          />
        </Link>
        <div className="signup-nav-text">
          <span className="signup-nav-txt-account">Account</span>
          <span className="signup-nav-txt-basic">Basic Info</span>
          <span className="signup-nav-txt-identity">Identity</span>
          <span className="signup-nav-txt-funding">Funding</span>
          <span className="signup-nav-txt-submit">Submit</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={`${formType}-form-tag`}>
        <div className={`div-other-${formType}`}>
          <div className={`div-inside-${formType}`}>
            <h2 className={`${formType}-header`}>Make Your Money Move</h2>

            <div className="signup-top">
              <p className={`${formType}-paragraph`}>
                RobinsJacket lets you invest in companies you trust,
                commission-free.
              </p>

              {/* combine this div with email and pw */}
              <div className={`${formType}-names`}> 
                <input
                  type="text"
                  value={user.fname}
                  placeholder="First name"
                  onChange={handleInput("fname")}
                  className={`${formType}-input ${formType}-fname`}
                />
                <input
                  type="text"
                  value={user.lname}
                  placeholder="Last name"
                  onChange={handleInput("lname")}
                  className={`${formType}-input ${formType}-lname`}
                />
              </div>
            </div>

            <input
              type="text"
              value={user.email}
              placeholder="Email"
              onChange={handleInput("email")}
              className={`${formType}-input ${formType}-email`}
            />

            <input
              type="password"
              value={user.password}
              placeholder="Password (min. 8 characters)"
              onChange={handleInput("password")}
              className={`${formType}-input ${formType}-password`}
            />

            <div className={`session-${formType}-buttons`}>
              <button className={`button-${baseColor} ${formType}-submit`}>
                Continue
              </button>
              <button
                className={`button-${baseColor}`}
                onClick={demo}
              >
                Demo User
              </button>
            </div>

            <div className={`${formType}-errors-div`}>
              {errors ? displayErrors() : ""}
            </div>
            <div className="other-link-div">
              <span className="other-link-text">Already a member?</span>
              <Link
                to={'/login'}
                className={`link-${baseColor}-only other-link`}
              >
                Log In to start trading
              </Link>
            </div>
          </div>
        </div>

        <div className={`${formType}-img`}>
          <div className="right-nav-video">
            <video
              autoPlay
              controlsList="nodownload nofullscreen noremoteplayback"
              loop
              muted
              playsInline
              preload="auto"
              className={`${formType}-video`}
              width="315"
              height="175"
            >
              <source src={window.signup_video} type="video/mp4"></source>
            </video>

            <div className="signup-after-vid">
              <p className="video-text">
                We’ve cut the fat that makes other brokerages costly, like
                manual account management and hundreds of storefront
                locations, so we can offer zero commission trading.
              </p>

              <button
                className="video-button link-sblue-only"
                type="button"
                onClick={function() { setHidden(!hidden)}}
              >
                View commission disclosures
              </button>

              {hidden ? (
                <p className="video-text-hidden">
                  Commission-free trading refers to $0 commissions for
                  RobinsJacket Inc self-directed individual cash or margin
                  brokerage accounts that trade U.S. listed securities via
                  mobile devices or the web. Relevant SEC <br /> &amp; FINRA
                  fees may apply. Please <br /> see our{" "}
                  <span className="link-sblue-only">Fee Schedule.</span>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </form>

      <div className={`${formType}-footer`}>
        <p>
          All investments involve risk and the past performance of a
          security, or financial product does not guarantee future results
          or returns. Keep in mind that while diversification may help
          spread risk it does not assure a profit, or protect against loss,
          in a down market. There is always the potential of losing money
          when you invest in securities, or other financial products.
          Investors should consider their investment objectives and risks
          carefully before investing.
        </p>
        <p>
          All securities and investments are offered to self-directed
          customers by RobinsJacket Incorporated, member{" "}
          <Link to="/loremips" className="link-sblue-only">
            FINRA
          </Link>{" "}
          &amp;{" "}
          <Link to="/loremips" className="link-sblue-only">
            SIPC.
          </Link>{" "}
          Additional information about your broker can be found by clicking{" "}
          <Link to="/loremips" className="link-sblue-only">
            here
          </Link>
          . RobinsJacket Incorporated is a wholly owned subsidiary of
          RobinsMarkets, Inc.
        </p>
        <p>
          Check the background of RobinsJacket Incorporated and RobinsJacket
          Securities, LLC on{" "}
          <Link to="/loremips" className="link-sblue-only">
            FINRA's BrokerCheck
          </Link>
          .
        </p>
        <p>
          <Link to="/loremips" className="footer-link link-sblue-only">
            RobinsJacket Terms &amp; Conditions
          </Link>
          <Link to="/loremips" className="footer-link link-sblue-only">
            Disclosure Library
          </Link>
          <Link to="/loremips" className="footer-link link-sblue-only">
            Contact Us
          </Link>
          <Link to="/loremips" className="footer-link link-sblue-only">
            FAQ
          </Link>
        </p>
        <p>© March 2020 RobinsJacket. All rights reserved.</p>
      </div>
    </div> //first div
  )
}

export default SignupForm;


//     this.props.clearErrors();
//   }

