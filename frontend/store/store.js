import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import RootReducer from '../reducers/root_reducer';

const configStore = preloadedState => configureStore({
  reducer: RootReducer,
  middleware: () => [logger],
  preloadedState,
});

export default configStore;