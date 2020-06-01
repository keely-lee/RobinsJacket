class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker, null: false
      t.string :company_name, null: false
    end

    add_index :stocks, :ticker, unique: true
  end
end
