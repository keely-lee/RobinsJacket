import * as TransactionsUtil from "../util/portfolio_api_util";
import { receiveCurrentUser } from "./session_actions";

export const createTransaction = transaction => {
  return TransactionsUtil.createTransaction(transaction)
    // .then(user => dispatch(receiveCurrentUser(user)))
}

// export const 