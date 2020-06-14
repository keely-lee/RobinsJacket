class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks_watchlists do |t|
      t.integer :stock_id
      t.integer :watchlist_id
    end

    add_index :stocks_watchlists, :stock_id
    add_index :stocks_watchlists, :watchlist_id
  end
end
