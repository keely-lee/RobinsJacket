import React from 'react';
import { connect } from 'react-redux';
import UserHome from './user_home';
import { logout } from '../../actions/session_actions';
import { displayStocks, displayStock } from '../../actions/stock_actions';
import { displayNews } from '../../actions/news_actions';
import { createWatch, deleteWatch } from '../../actions/watchlist_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  stocks: state.entities.stocks,
  news: state.entities.news,
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  getStock: (ticker) => dispatch(displayStock(ticker)),
  getNews: (ticker, snippetCount) => dispatch(displayNews(ticker, snippetCount)),
  createWatch: (stock) => dispatch(createWatch(stock)),
  deleteWatch: (stockid) => dispatch(deleteWatch(stockid)),
})

const UserHomeContainer = connect(mSTP, mDTP)(UserHome);
export default UserHomeContainer;