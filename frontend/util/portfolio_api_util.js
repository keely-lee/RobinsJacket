export const receivePortfolio = () => {
  return $.ajax({
    method: "GET",
    url: "/api/portfolios/id",
  });
};

export const createTransaction = (transaction) => {
  return $.ajax({
    method: "POST",
    url: "/api/transactions",
    data: { transaction },
  });
};

export const receiveTransactions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/transactions",
  });
};

// export const receiveTransaction = id => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/transactions/${id}`
//   })
// }
