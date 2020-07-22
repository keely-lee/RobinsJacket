json.extract! @portfolio, :id

json.portfolio @portfolio.all_owned do |stock|
  debugger
  json.stock_id stock.stock_id
  # json.ticker stock.ticker
  json.shares stock.shares
  json.total_amt stock.total
end
