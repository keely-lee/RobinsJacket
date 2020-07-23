import * as PortfoliosUtil from "../util/portfolio_api_util";
// import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";

const receivePortfolio = portfolio => {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio
  }
}

export const grabPortfolio = () => dispatch => {
  return PortfoliosUtil.receivePortfolio()
    .then(portfolio => dispatch(receivePortfolio(portfolio)))
    // .fail()
} 

export const createTransaction = transaction => dispatch => {
  return PortfoliosUtil.createTransaction(transaction)
    // .then(portfolio => dispatch(receivePortfolio(portfolios)))
}
