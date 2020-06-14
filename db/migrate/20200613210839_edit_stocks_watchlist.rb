class EditStocksWatchlist < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks_watchlists, :stock_id, :integer
    remove_column :stocks_watchlists, :watchlist_id, :integer
    add_reference :stocks_watchlists, :stock, index: true
    add_reference :stocks_watchlists, :watchlist, index: true
  end
end
