#json.partial ! "api/stocks/stock", stocks: @stocks

json.array! @watchlist, :stock_ids, :tickers
