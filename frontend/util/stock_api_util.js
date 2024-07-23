import {
  RAPID_API_KEY,
  RAPID_API_HOST,
  rapid_base_url,
  multiBaseUrl,
  multiHost,
} from "./util";

export const receiveStocks = (sym) => {
  let tickers =
    sym ||
    "AAL, AAPL, AMZN, BA, BABA, DIS, DKNG, META, GE, GOOGL, JBLU, JPM, LYFT, MSFT, NFLX, NIO, NKE, NVDA, NYMT, SBUX, TSLA, TWTR, TXMD, UAL, UBER, WORK, XOM, ZM";
  tickers = tickers.split(" ").join("");

  return $.ajax({
    method: "GET",
    url: `${multiBaseUrl}/market/v2/get-quotes`,
    data: {
      symbols: tickers,
      region: "US",
    },
    headers: {
      "X-RapidAPI-Key": process.env[RAPID_API_KEY],
      "X-RapidAPI-Host": multiHost,
      // "X-RapidAPI-Host": process.env[RAPID_API_HOST],
    },
  });
};

export const receiveStock = (ticker, interval = "1d", range = "1mo") => {
  return $.ajax({
    method: "GET",
    url: `${rapid_base_url}/stock/v3/get-chart`,
    data: {
      symbol: ticker,
      interval,
      range,
      region: "US",
      includePrePost: "false",
      useYfid: "true",
      includeAdjustedClose: "true",
      events: "capitalGain,div,split",
    },
    headers: {
      "X-RapidAPI-Key": process.env[RAPID_API_KEY],
      "X-RapidAPI-Host": process.env[RAPID_API_HOST],
    },
  });
};

export const getTicker = (id) => {
  // DEPRECATED. swapped for ticker vs id
  return $.ajax({
    method: "GET",
    url: `/api/stocks/${id}`,
  });
};

export const postNewTicker = (stock) => {
  // DEPRECATED. swapped for ticker vs id
  return $.ajax({
    method: "POST",
    url: `/api/stocks`,
    data: { stock },
  });
};
