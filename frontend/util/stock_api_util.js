export const receiveStocks = stocks => {
  return $.ajax({
    method: "GET",
    url: "/api/stocks"
  })
};

export const receiveStock = stockId => {
  return $.ajax({
    method: "GET",
    url: `/api/stock/${stockId}`,
  })
};

