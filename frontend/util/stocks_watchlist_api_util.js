export const postWatch = (stock) => {
  return $.ajax({
    method: "POST",
    url: "/api/stocks_watchlists",
    data: { stock },
  });
};

export const deleteWatch = (stockid) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/stocks_watchlists/${stockid}`,
  });
};
