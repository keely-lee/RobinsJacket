# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_01_202411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stocks", force: :cascade do |t|
    t.string "ticker", null: false
    t.string "company_name", null: false
    t.index ["ticker"], name: "index_stocks_on_ticker", unique: true
  end

  create_table "transactions", force: :cascade do |t|
    t.datetime "transaction_date", null: false
    t.string "transaction_type", null: false
    t.integer "shares", null: false
    t.float "price", null: false
    t.integer "portfolio_id", null: false
    t.integer "stock_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_transactions_on_portfolio_id"
    t.index ["stock_id"], name: "index_transactions_on_stock_id"
    t.index ["transaction_date"], name: "index_transactions_on_transaction_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.string "session_token"
    t.string "fname", null: false
    t.string "lname", null: false
    t.float "funds_available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

end
