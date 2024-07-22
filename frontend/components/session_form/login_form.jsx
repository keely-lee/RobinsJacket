import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
}

function LoginForm ({formType, processForm, errors, clearErrors}, props) {
  const [user, setUser] = useState(initialUser);
  useEffect(() => clearErrors, []);

  const baseColor = "lgreen"; // fix this later

  function handleInput(field) {
    return function(e) {
      setUser({
        ...user,
        [field]: e.currentTarget.value,
      });
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    processForm(user);
  }

  function demoUser(_e) { 
    setUser({ email: "acarnegie@gmail.com", password: "password1" });
  }

  function displayErrors() {
    return (
      <ul className={`${formType}-error-list`}>
        {errors.map((error, idx) => (
          <li key={`error-${idx}`} id={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  // all CSS and div/sections need to be fixed
  return (
    <div className={`${formType}-main-div`}>
      <form onSubmit={handleSubmit} className={`${formType}-form-tag`}>
        <div className={`div-other-${formType}`}>
          <div className={`div-inside-${formType}`}>
            <h2 className={`${formType}-header`}>Welcome to RobinsJacket</h2>
            <p className={`${formType}-labelEmail`}>Email or username</p>
            <input
              type="text"
              value={user.email}
              onChange={handleInput("email")}
              className={`${formType}-input ${formType}-email`}
            />

            <p className={`${formType}-labelPW`}>Password</p>
            <input
              type="password"
              value={user.password}
              onChange={handleInput("password")}
              className={`${formType}-input ${formType}-password`}
            />

            <Link to="/" className={`link-${baseColor}-only forgot`}>
              Forgot your username or password?
            </Link>

            <div className={`session-${formType}-buttons`}>
              <button className={`button-${baseColor} ${formType}-submit`}>
                Sign In
              </button>
              <button className={`button-${baseColor}`} onClick={demoUser}>
                Demo User
              </button>
            </div>

            <div className={`${formType}-errors-div`}>
              {errors ? displayErrors() : ""}
            </div>
            <div className="other-link-div">
              <span className="other-link-text">Get started </span>
              <Link
                to={"/signup"}
                className={`link-${baseColor}-only other-link`}
              >
                Create an account today
              </Link>
            </div>
          </div>
        </div>

        <div className={`${formType}-img`}>
          <img
            src={window.login_page}
            draggable="false"
            className={`${formType}-image`}
          />
        </div>
      </form>
    </div>
  )
};

export default LoginForm