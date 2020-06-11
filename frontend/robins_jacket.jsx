import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store"
import Root from "./components/root"; 
import { receiveStocks, receiveStock } from "./util/stock_api_util"
import { receiveNews } from "./util/news_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store; 

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

  //remove eventually
  window.getState = store.getState;
  window.grabStocks = receiveStocks;
  window.grabStock = receiveStock;
  window.grabNews = receiveNews;
  // receiveNews();
  // console.log(store.getState())

  ReactDOM.render(<Root store={store}/>, root)
})
