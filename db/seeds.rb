# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#ASK ABOUT DROPPING TABLES

carnegie = User.create!(email: "acarnegie@gmail.com", password: "password1",fname: "Andrew", lname: "Carnegie", funds_available: 99999999)
gatsby = User.create!(email: "jgatsby@gmail.com", password: "password2",fname: "James", lname: "Gatsby", funds_available: 98750000)
buffett = User.create!(email: "wbuffett@gmail.com", password: "password3", fname: "Warren", lname: "Buffett", funds_available: 8000000)
demo = User.create!(email: "hiringmanager@gmail.com", password: "password4", fname: "Keely", lname: "Lee")

aapl = Stock.create!(ticker: "AAPL", company_name: "Apple, Inc.")
msft = Stock.create!(ticker: "MSFT", company_name: "Microsoft Corp.")

big_five = Watchlist.create!(user_id: carnegie.id)

one = StocksWatchlist.create!(stock_id: aapl.id, watchlist_id: big_five.id)
two = StocksWatchlist.create!(stock_id: msft.id, watchlist_id: big_five.id)


nyc = Watchlist.create!(user_id: buffett.id)
cali = Watchlist.create!(user_id: gatsby.id)