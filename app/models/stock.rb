# == Schema Information
#
# Table name: stocks
#
#  id           :bigint           not null, primary key
#  ticker       :string           not null
#  company_name :string           not null
#
class Stock < ApplicationRecord
  validates :ticker, :company_name, presence: true

  has_many :stocks_watchlist_id,
  class_name: :StocksWatchlist

  has_many :stocks_watchlist_ticker,
  class_name: :StocksWatchlist,
  foreign_key: :ticker,
  primary_key: :ticker

  has_many :transactions,
  class_name: :Transaction

  def watchlists
    stocks_watchlist_ticker.or(stocks_watchlist_id)
  end
end
