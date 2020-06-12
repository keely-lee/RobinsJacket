
export const receiveNews = () => {
  return $.ajax({
    method: "GET",
    url: `https://sandbox.iexapis.com/stable/time-series/news?range=1m&limit=30&token=Tpk_5c8501bd14b844bd9703a6f94e1ba08d`
  })
}