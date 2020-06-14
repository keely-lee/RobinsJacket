class EditWatchlist < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :stock_id, :integer
  end
end
