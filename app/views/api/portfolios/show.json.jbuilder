json.extract! @portfolio, :id

# json.portfolio @portfolio.all_owned do |stock|
#   json.stock_id stock.stock_id
#   json.ticker stock.ticker
#   json.shares stock.shares
#   json.total_amt stock.total
# end

json.portfolio @portfolio.current_owned do |transaction| 
  json.stock_id transaction.stock_id
  json.shares transaction.shares
  json.price transaction.price
  json.date transaction.transaction_date
  json.trans_type transaction.transaction_type
  json.ticker transaction.ticker
end

