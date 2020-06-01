class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.datetime :transaction_date, null: false
      t.string :transaction_type, null: false
      t.integer :shares, null: false
      t.float :price, null: false
      t.integer :portfolio_id, null: false
      t.integer :stock_id, null: false

      t.timestamps
    end

    add_index :transactions, :transaction_date
    add_index :transactions, :portfolio_id
    add_index :transactions, :stock_id
  end
end
