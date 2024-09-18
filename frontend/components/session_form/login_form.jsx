import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
};

function LoginForm({ processForm, errors, clearErrors }) {
  const [user, setUser] = useState(initialUser);
  useEffect(() => clearErrors, []);

  function handleInput(field) {
    return function (e) {
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
      <ul className="login-error-list">
        {errors.map((error, idx) => (
          <li key={`error-${idx}`} id={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="login-main-div">
      <form onSubmit={handleSubmit}>
        <div className="login-form-div">
          <h2>Welcome to RobinsJacket</h2>
          <p>Email or username</p>
          <input
            type="text"
            value={user.email}
            onChange={handleInput("email")}
          />

          <p>Password</p>
          <input
            type="password"
            value={user.password}
            onChange={handleInput("password")}
          />

          <Link to="/" className="forgot">
            Forgot your username or password?
          </Link>

          <div className="login-buttons">
            <button>Sign In</button>
            <button onClick={demoUser}>Demo User</button>
          </div>

          <div>{errors ? displayErrors() : ""}</div>
          <div className="other-link-div">
            <span>Get started </span>
            <Link to={"/signup"}>Create an account today</Link>
          </div>
        </div>
      </form>

      <div className="login-img">
        <img src="https://robins-jacket-dev.s3.amazonaws.com/images/login_page.jpg" draggable="false" />
      </div>
    </div>
  );
}

export default LoginForm;
