import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store"
import * as APIUtil from "./util/session_api_util";
import Root from "./components/root"; 

import { login, logout, signup } from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={store}/>, root)
})
