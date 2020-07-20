# == Schema Information
#
# Table name: transactions
#
#  id               :bigint           not null, primary key
#  transaction_date :datetime         not null
#  transaction_type :string           not null
#  shares           :integer          not null
#  price            :float            not null
#  portfolio_id     :integer          not null
#  stock_id         :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Transaction < ApplicationRecord
  validates :transaction_date, :transaction_type, :shares, :price, :portfolio_id, :stock_id, presence: true
  validates :transaction_type, inclusion: { in: ['purchase', 'sale'] }
  validate :check_enough
  after_save :make_transaction

  belongs_to :portfolio,
  class_name: :Portfolio

  has_one :owner,
  through: :portfolio,
  source: :user

  belongs_to :stock,
  class_name: :Stock

  def check_enough
    if self.transaction_type == 'purchase'
      unless (self.shares * self.price) <= owner.funds_available
        errors[:portfolio_id] << "Not enough funds for purchase"
      end
    else
      unless self.shares <= portfolio.num_shares(self.stock_id)
        errors[:shares] << "Not enough shares to sell, reduce shares"
      end
    end
  end

  #after save, deduct from user
  def make_transaction
    if self.transaction_type == 'purchase'
      owner.funds_available -= (self.shares * self.price)
      owner.save!
    else
      owner.funds_available += (self.shares * self.price)
      owner.save!
    end
  end
  
end
