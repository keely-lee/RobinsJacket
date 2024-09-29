import * as StockAPIUtil from "../util/stock_api_util";
import { setTickersFormat } from "../util/util";

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const CLEAR_STOCKS = "CLEAR_STOCKS"

export const receiveStocks = (stocks) => {
  return {
    type: RECEIVE_STOCKS,
    stocks,
  };
};

export const receiveStock = (stock) => {
  return {
    type: RECEIVE_STOCK,
    stock,
  };
};

export const clearStock = () => ({ type: CLEAR_STOCKS });

export const displayStocks = (stocks) => (dispatch) => {
  return StockAPIUtil.receiveStocks(stocks).then((stocks) =>
    dispatch(
      receiveStocks(setTickersFormat(stocks.quoteResponse.result, "symbol")),
    ),
  );
};

export const displayStock = (ticker, endpt) => (dispatch) => {
  // [TODO KL]: fix this
  if (endpt) {
    return StockAPIUtil.receiveStock(ticker, endpt).then((stock) =>
    dispatch(receiveStock(setTickersFormat(stock.quoteResponse.result, "symbol"))),
    );
  } else {
    return StockAPIUtil.receiveStock(ticker.toUpperCase()).then((stock) => {
    dispatch(receiveStock(setTickersFormat(stock.chart.result, "meta.symbol")))
    })
  }
};

export const displayByTicker = (ticker) => {
  return StockAPIUtil.getTicker(ticker);
};

export const displayByNewTicker = (stock) => {
  return StockAPIUtil.postNewTicker(stock);
};
