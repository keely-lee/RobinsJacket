class Watchlist < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
  class_name: :User
  
  has_many :stocks,
  class_name: :Stock

end