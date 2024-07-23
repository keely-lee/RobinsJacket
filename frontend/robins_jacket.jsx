import React from "react";
import ReactDOM from "react-dom/client";

import configureStore from "./store/store";
import Root from "./components/root";
import { createUser, logoutUser } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  let store;

  window.createUser = createUser;
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
