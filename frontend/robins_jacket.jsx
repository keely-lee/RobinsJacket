import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store"
import * as APIUtil from "./util/session_api_util";
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.createUser = APIUtil.createUser; //
  window.loginUser = APIUtil.loginUser; //
  window.logoutUser = APIUtil.logoutUser;



  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={store}/>, root)
})
