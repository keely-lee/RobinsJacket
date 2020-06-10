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
  validates :transaction_date, :transaction_type, :shares, :price, :portfolio_id, :stock_id, :created_at, :updated_at, presence: true


  def make_transaction(type)
    
  end
  
end
