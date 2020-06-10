import React from 'react';
import { connect } from 'react-redux'
import UserHome from './user_home'
import { logout } from "../../actions/session_actions"
import { displayStocks, displayStock } from "../../actions/stock_actions"


//usercontainer receive currentUser, f(logout)

const mSTP = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  stocks: state.entities.stocks,
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  getStocks: () => dispatch(displayStocks()),
  getStock: (ticker) => dispatch(displayStock(ticker)),
})

const UserHomeContainer = connect(mSTP, mDTP)(UserHome);
export default UserHomeContainer;