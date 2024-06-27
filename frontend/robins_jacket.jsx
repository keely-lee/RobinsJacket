import React from "react";
import ReactDOM from "react-dom/client";

import configureStore from "./store/store";
import Root from "./components/root";
import { receiveStocks, receiveStock } from "./util/stock_api_util";
import { receiveNews } from "./util/news_api_util";
import { postWatch } from "./util/stocks_watchlist_api_util";
import { createWatch } from "./actions/watchlist_actions";
import { createUser, logoutUser } from "./util/session_api_util";
import { receivePortfolio } from "./actions/portfolio_actions";
// import { createUser } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  let store;

  window.createWatch = createWatch;
  window.postWatch = postWatch;
  window.createUser = createUser;
  window.getPortfolio = receivePortfolio;
  window.logout = logoutUser;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  root.render(<Root store={store} />);
});
