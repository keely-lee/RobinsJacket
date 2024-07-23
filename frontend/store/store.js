import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers/root_reducer";

const configStore = (preloadedState) =>
  configureStore({
    reducer: RootReducer,
    middleware: () => [thunk, logger],
    preloadedState,
  });

export default configStore;
