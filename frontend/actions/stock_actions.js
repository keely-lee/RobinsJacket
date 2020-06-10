import * as StockAPIUtil from "../util/stock_api_util";

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveStocks = (stocks) => {
  return {
    type: RECEIVE_STOCKS,
    stocks
  }
}

export const receiveStock = (stock) => {
  return {
    type: RECEIVE_STOCK,
    stock
  }
}


export const displayStocks = () => dispatch => {
  return StockAPIUtil.receiveStocks()
    .then(stocks => dispatch(receiveStocks(stocks)))
}

export const displayStock = stockTicker => dispatch => {
  return StockAPIUtil.receiveStock(stockTicker)
    .then(stock => dispatch(receiveStock(stock)))
}