import * as APIUtil from "../util/session_api_util";
import { clearNews } from "./news_actions";
import { clearPortfolios } from "./portfolio_actions";
import { clearStock } from "./stock_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  //errors will be an array
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.loginUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {
  return APIUtil.logoutUser()
    .then(() => {
      dispatch(logoutCurrentUser())
      dispatch(clearPortfolios())
      dispatch(clearStock())
      dispatch(clearNews())
      dispatch(clearErrors())
    })
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.createUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};
