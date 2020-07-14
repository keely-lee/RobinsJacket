# == Schema Information
#
# Table name: watchlists
#
#  id      :bigint           not null, primary key
#  user_id :integer          not null
#
class Watchlist < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
  class_name: :User

  has_many :stocks_watchlist,
  class_name: :StocksWatchlist,
  dependent: :destroy
  
  has_many :stocks,
  through: :stocks_watchlist

end
