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

  def current_owned
    # Transaction.select("sum(shares * price) AS total, sum(shares) AS shares, transactions.stock_id").where(portfolio_id: self.id).group(:stock_id).having('sum(shares) > 0')
    curr_owned = Transaction.where(portfolio_id: self.id).group(:stock_id).having('sum(shares) > 0').pluck(:stock_id)
    
    # Stock.select("stocks.ticker, transactions.*").joins(:transactions).where("portfolio_id: self.id AND id in (?)", curr_owned)

    Transaction.select("transactions.*, stocks.ticker").joins(:stock).where(portfolio_id: self.id)
    # | shares | price | p/s | stocks.ticker | stock_id | transDate |  => select(*).where(portfolio: self.id).joins(stocks)....=> sum > 0
  end

  def num_shares(stock_id)
    Transaction.where(stock_id: stock_id, portfolio_id: self.id).sum(:shares)
  end
  
end