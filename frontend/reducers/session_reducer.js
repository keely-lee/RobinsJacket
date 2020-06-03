import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

//this reducer keeps track of current_user

const SessionReducer = (oldState = { currentUserId: null }, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    newState["currentUserId"] = action.currentUser.id;
    return newState;
  case LOGOUT_CURRENT_USER:
    newState["currentUserId"] = null;
    return newState;
  default:
    return oldState;
  }
}

export default SessionReducer;