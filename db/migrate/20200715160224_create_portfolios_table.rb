class CreatePortfoliosTable < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id
    end

    add_index :portfolios, :user_id
  end
end
