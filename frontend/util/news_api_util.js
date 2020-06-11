
// export const receiveNews = () => {
//   return $.ajax({
//     method: "GET",
//     url: `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42e27fcfca4d4cf1b71c45c0ed59a278`
//   })
// }

// export const receiveNews = () => {
//   return $.ajax({
//     method: "GET",
//     url: `https://sandbox.iexapis.com/stable/time-series/news?range=1m&limit=30&token=Tpk_5c8501bd14b844bd9703a6f94e1ba08d`
//   })
// }

export const receiveNews = () => {
  return $.ajax({
    method: "GET",
    // url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42e27fcfca4d4cf1b71c45c0ed59a278`
    url: `https://sandbox.iexapis.com/stable/time-series/news?range=1m&limit=30&token=Tpk_5c8501bd14b844bd9703a6f94e1ba08d`
  })
}