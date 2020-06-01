class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :session_token, null: true
    change_column_null :users, :password_digest, null: true
    change_column_null :users, :funds_available, null: true
  end
end
