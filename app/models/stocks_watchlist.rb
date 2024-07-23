# == Schema Information
#
# Table name: stocks_watchlists
#
#  id           :bigint           not null, primary key
#  stock_id     :bigint
#  watchlist_id :bigint
#  ticker       :string
#
class StocksWatchlist < ApplicationRecord
  self.table_name = "stocks_watchlists"

  validates :stock_id, :watchlist_id, presence: true
  validates :stock_id, :ticker, uniqueness: { scope: :watchlist_id, message: "Already added" }
  
  belongs_to :watchlist,
  class_name: :Watchlist

  belongs_to :stock,
  class_name: :Stock

  belongs_to :stock_ticker,
  foreign_key: :ticker,
  class_name: :Stock,
  primary_key: :ticker
end
