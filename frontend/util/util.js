export const RAPID_API_KEY = "RAPID_API_KEY";
export const RAPID_API_HOST = "RAPID_API_HOST";

export const rapid_base_url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";

export const multiBaseUrl = 'https://yh-finance.p.rapidapi.com';
export const multiHost = 'yh-finance.p.rapidapi.com';

// export const TEMP_BASE_URL = "https://yahoo-finance127.p.rapidapi.com/multi-quote";
// export const TEMP_STOCKS_HOST = "yahoo-finance127.p.rapidapi.com";

// export const setTickersFormat = (stocks: Array<Object>, tickerPath) => {
export const setTickersFormat = (stocks, tickerPath) => (
  stocks.reduce((acc, stock) => {
    acc[stock[tickerPath]] = stock;
    return acc;
  }, {})
);

export const setNestedTickersFormat = (stocks, tickerPath) => {
  const paths = tickerPath.split(".");

  return stocks.reduce((acc, stock) => {
    let obj = Object.assign(stock); // obj eventually becomes the ticker string
    for (let idx in paths) {
      const key = paths[idx];
      if (!obj[key]) obj[key] = {};
      obj = obj[key]
    }

    acc[obj] = stock;
    return acc;
  }, {})
}
