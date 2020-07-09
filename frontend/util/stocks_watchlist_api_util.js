export const postWatch = stock => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/stocks_watchlists",
    data: { stock }
  })
}
