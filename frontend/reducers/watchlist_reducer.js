import { RECEIVE_WATCHLIST } from "../actions/watchlist_actions";

export const WatchlistReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    // case RECEIVE_WATCHLIST:
    //   newState = action.watchlist;
    //   return newState;
    default:
      return oldState;
  }
};
