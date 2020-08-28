export const createTransaction = transaction => {
  return $.ajax({
    method: "POST",
    url: "/api/transactions",
    data: { transaction }
  })
}

export const showTransaction = id => {
  return $.ajax({
    method: "GET",
    url: `/api/transactions/${id}`
  })
}

export const showTransactions = () => {
  return $.ajax({
    method: "GET",
    url: `/api/transactions/`
  })
}