class Portfolio < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
  class_name: :User

  has_many :transactions,
  class_name: :Transaction,
  dependent: :destroy

  has_many :stocks,
  through: :transactions

  # def all_owned
  # end
  
end