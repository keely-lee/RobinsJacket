json.extract! @portfolio, :id

json.portfolio @portfolio.all_owned do |stock|
  json.stock_id stock.stock_id
  json.shares stock.shares
  json.total_amt stock.total
end
