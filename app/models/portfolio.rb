class Portfolio < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user,
  class_name: :User

  has_many :transactions,
  class_name: :Transaction,
  dependent: :destroy

  has_many :stocks,
  through: :transactions

  def all_owned
    #iterate and sum
  end

  def num_shares(stock_id)
    #sum all owned
    Transaction.sum(:shares).where(stock_id: stock_id, portfolio_id: self.id).order(transaction_date: :desc )

  end
  
end