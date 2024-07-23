class AddColumnStockswatchlist < ActiveRecord::Migration[7.1]
  def change
    add_column :stocks_watchlists, :ticker, :string
    add_index :stocks_watchlists, :ticker

  end
end
