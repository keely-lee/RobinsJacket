import * as StockAPIUtil from "../util/stock_api_util";
import { setTickersFormat } from '../util/util';

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";

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

export const displayStocks = (stocks) => (dispatch) => {
  return StockAPIUtil.receiveStocks(stocks)
    .then((stocks) => dispatch(receiveStocks(setTickersFormat(stocks.quoteResponse.result, 'symbol')))
  );
};

export const displayStock = (stockTicker) => (dispatch) => {
  return StockAPIUtil.receiveStock(stockTicker.toUpperCase()).then((stock) =>
    dispatch(receiveStock(setTickersFormat(stock.chart.result, 'meta.symbol')))
  );
};

export const displayByURL = (id) => (dispatch) => {
  return StockAPIUtil.getTicker(id)
    .then((stockTicker) => StockAPIUtil.receiveStock(stockTicker.ticker))
    .then((stock) => dispatch(receiveStock(stock)));
};

export const displayByTicker = (ticker) => {
  return StockAPIUtil.getTicker(ticker);
};

export const displayByNewTicker = (stock) => {
  return StockAPIUtil.postNewTicker(stock);
};
