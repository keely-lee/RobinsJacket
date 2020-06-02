import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.createUser = APIUtil.createUser;
  window.login = APIUtil.loginUser;

  // const store = configureStore();
  ReactDOM.render(<h2>RobbinsJacket! Let's Get Started</h2>, root)
})
