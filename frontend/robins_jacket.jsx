import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import * as APIUtil from './util/session_api_util';

const Root = () => {
  return (
    <div>
      <h2>RobbinsJacket! Let's Get Started</h2>
    </div>
  )
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.createUser = APIUtil.createUser; //
  window.login = APIUtil.loginUser; //
  window.logout = APIUtil.logoutUser;

  ReactDOM.render(<Root store={store}/>, root)
})
