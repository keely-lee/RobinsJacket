import * as PortfoliosUtil from "../util/portfolio_api_util";
import { receiveCurrentUser } from "./session_actions";

export const receivePortfolio = () => {
  return PortfoliosUtil.receivePortfolio()
    // .then(res => { console.log(res); console.log("RES")})
} 

export const createTransaction = transaction => {
  return PortfoliosUtil.createTransaction(transaction)
    // .then(user => dispatch(receiveCurrentUser(user)))
}
