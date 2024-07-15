import { useEffect, useRef } from 'react';
import _ from 'lodash';

export const RAPID_API_KEY = "RAPID_API_KEY";
export const RAPID_API_HOST = "RAPID_API_HOST";

export const rapid_base_url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";

export const multiBaseUrl = 'https://yh-finance.p.rapidapi.com';
export const multiHost = 'yh-finance.p.rapidapi.com';

// export const TEMP_BASE_URL = "https://yahoo-finance127.p.rapidapi.com/multi-quote";
// export const TEMP_STOCKS_HOST = "yahoo-finance127.p.rapidapi.com";

export const setTickersFormat = (stocks, tickerPath) => (
  stocks.reduce((acc, stock) => {
    const ticker = _.get(stock, tickerPath, '')
    acc[ticker] = stock;
    return acc;
  }, {})
)

export function useInterval(callback, delay=1000) {
  const savedCallback = useRef();

  useEffect(() => savedCallback.current = callback);
  useEffect(() => {
    const cb = () => savedCallback.current();
    const intervalId = setInterval(cb, delay);
    return () => clearInterval(intervalId);
  }, []);
}
