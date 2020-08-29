import * as PortfoliosUtil from "../util/portfolio_api_util";
import * as TransactionsUtil from "../util/transactions_api_util";
// import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receivePortfolio = portfolio => {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio
  }
}

const receiveTransErrors = errors => {
  return {
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
  }
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const grabPortfolio = () => dispatch => {
  return PortfoliosUtil.receivePortfolio()
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    // .fail()
} 

export const createTransaction = trans => dispatch => {
  return TransactionsUtil.createTransaction(trans)
    // .then(trans => dispatch(receivePortfolio(trans)))
    .fail(err => dispatch(receiveTransErrors(err)))
}
