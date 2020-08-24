json.portfolio @portfolio.current_owned do |transaction| 
  json.portfolio_id transaction.portfolio_id
  json.stock_id transaction.stock_id
  json.shares transaction.shares
  json.price transaction.price
  json.date transaction.transaction_date
  json.trans_type transaction.transaction_type
  json.ticker transaction.ticker
end
