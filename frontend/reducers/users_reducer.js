import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_STOCKS } from '../actions/stock_actions'; 
import { useReducer } from 'react';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
      return newState;
    // case RECEIVE_STOCKS:
    //   newState = Object.assign({}, oldState, { ['id'.watched_stocks]: [action.stocks] });
    //   return newState;
    default:
      return oldState;
  };
}

export default UsersReducer;