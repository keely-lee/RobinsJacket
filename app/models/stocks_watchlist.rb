# == Schema Information
#
# Table name: stocks_watchlists
#
#  id           :bigint           not null, primary key
#  stock_id     :bigint
#  watchlist_id :bigint
#
class StocksWatchlist < ApplicationRecord

  self.table_name = "stocks_watchlists"

  validates :stock_id, :watchlist_id, presence: true
  
  belongs_to :watchlist,
  class_name: :Watchlist

  belongs_to :stock,
  class_name: :Stock

  #   def add_stock(ticker, name)
  #   @stock = Stock.new(ticker, name)
  #   @watch = StocksWatchlist.new(stock.id, self.id)
  #   return @watch
  # end

end
