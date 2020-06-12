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

end
