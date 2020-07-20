class Portfolio < ApplicationRecord
  validates :user_id, presence: true 
  #Currently no validation for just one portfolio per user...

  belongs_to :user,
  class_name: :User

  has_many :transactions,
  class_name: :Transaction,
  dependent: :destroy

  has_many :stocks,
  through: :transactions
  #stocks will return stocks previously owned

  def all_owned
    Transaction.select("sum(shares * price) AS total, sum(shares) AS shares, transactions.stock_id").where(portfolio_id: self.id).group(:stock_id).having('sum(shares) > 0')
  end

  def num_shares(stock_id)
    Transaction.where(stock_id: stock_id, portfolio_id: self.id).sum(:shares)
  end
  
end