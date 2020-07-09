import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store"
import Root from "./components/root"; 
import { receiveStocks, receiveStock } from "./util/stock_api_util"
import { receiveNews } from "./util/news_api_util"
import { postWatch } from "./util/stocks_watchlist_api_util"
import { createWatch } from "./actions/watchlist_actions";
import { createUser } from "./util/session_api_util"
// import { createUser } from "./util/session_api_util"
 

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store; 

  window.createWatch = createWatch;
  window.postWatch = postWatch;
  window.createUser = createUser;
  // console.log("test")
  // console.log()
  // console.log("test")

  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } 
  else { store = configureStore(); }

  ReactDOM.render(<Root store={store}/>, root)
})
