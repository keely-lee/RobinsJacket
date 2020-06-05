class RecreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.float :funds_available, null: false

      t.timestamps
    end

    add_index :users, :session_token, unique: true
  end
end
