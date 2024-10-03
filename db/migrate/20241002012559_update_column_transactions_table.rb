class UpdateColumnTransactionsTable < ActiveRecord::Migration[7.2]
  def change
    add_column :transactions, :ticker, :string, null: false
    add_index :transactions, :ticker

    add_timestamps :portfolios
  end
end
