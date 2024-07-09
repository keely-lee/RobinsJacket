import {
  RAPID_API_KEY,
  RAPID_API_HOST,
  rapid_base_url,
  TEMP_BASE_URL,
  TEMP_STOCKS_HOST,
} from './util'

export const receiveNews = (ticker = "", snippetCount = 14, region = "US") => {
  return $.ajax({
    method: "POST",
    // url: `${rapid_base_url}/news/v2/list?s=${ticker}&snippetCount=${snippetCount}&region=${region}`,
    url: `${TEMP_BASE_URL}/news/${ticker}`,
    headers: {
      "X-RapidAPI-Key": process.env[RAPID_API_KEY],
      // "X-RapidAPI-Host": process.env[RAPID_API_HOST],
      "X-RapidAPI-Host": TEMP_STOCKS_HOST,
    },
  });
};

// // GENERAL AUTO ~major exchanges + ~8 latest news. Includes company long name
// export const receiveNews = (ticker='', region='US') => {
//   return $.ajax({
//     method: 'GET',
//     url: `${rapid_base_url}/auto-complete`,
//     data: {
//       q: ticker,
//       region
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env[RAPID_API_KEY],
//       'X-RapidAPI-Host': process.env[RAPID_API_HOST],
//     }
//   })
// };
