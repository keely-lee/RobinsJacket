# == Schema Information
#
# Table name: portfolios
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Portfolio < ApplicationRecord
  validates :user_id, presence: true 
  # Currently no validation for just one portfolio per user...

  belongs_to :user,
  class_name: :User

  has_many :transactions,
  class_name: :Transaction,
  dependent: :destroy

  has_many :stocks,
  through: :transactions
  # stocks will include stocks previously owned

  def current_owned
    curr_owned = Transaction.where(portfolio_id: self.id).group(:stock_id).having('sum(shares) > 0').pluck(:stock_id)
    
    Transaction.select("transactions.*, stocks.ticker").joins(:stock).where(["portfolio_id = ? AND stocks.id IN (?)", self.id, curr_owned]).order("stocks.ticker DESC, transaction_date")

    # calc notes: transactions must be sorted by stock, then date-ascending (iterate backwards)
  end

  def num_shares(stock_id)
    Transaction.where(stock_id: stock_id, portfolio_id: self.id).sum(:shares)
  end
end
