export const postWatch = stock => {
  return $.ajax({
    method: "POST",
    url: "/api/stocks_watchlists",
    data: { stock }
  })
}
