class StocksWatchlist < ApplicationRecord

  self.table_name = "stocks_watchlists"

  validates :stock_id, :watchlist_id, presence: true
  
  belongs_to :watchlist,
  class_name: :Watchlist

  belongs_to :stock,
  class_name: :Stock

end