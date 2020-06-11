
export const receiveNews = () => {
  return $.ajax({
    method: "GET",
    url: `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42e27fcfca4d4cf1b71c45c0ed59a278`
  })
}
