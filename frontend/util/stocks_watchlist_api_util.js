export const postWatch = (stock) => {
  return $.ajax({
    method: "POST",
    url: "/api/stocks_watchlists",
    data: { stock },
  });
};

// Fix naming, don't need delete by ID?
export const deleteWatch = (tickerOrStockid) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/stocks_watchlists/${tickerOrStockid}`,
  });
};
