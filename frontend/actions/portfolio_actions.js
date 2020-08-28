import * as PortfoliosUtil from "../util/portfolio_api_util";
import * as TransactionsUtil from "../util/transactions_api_util";
// import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";

const receivePortfolio = portfolio => {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio
  }
}

export const grabPortfolio = () => dispatch => {
// export const grabPortfolio = () => {
  return PortfoliosUtil.receivePortfolio()
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    // .fail()
} 

export const createTransaction = trans => dispatch => {
  return TransactionsUtil.createTransaction(trans)
    .then(trans => dispatch(receivePortfolio(trans)))
}
