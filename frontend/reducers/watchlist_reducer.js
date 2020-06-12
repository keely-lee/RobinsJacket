import { RECEIVE_WATCHLIST } from '../actions/watchlist_actions';

//refactor to make watchlist an array of stock_ids under the user entities
export const WatchlistReducer = (oldState = [], action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      let newState = action.watchlist;
      return newState;
    default:
      return oldState;
  }
}