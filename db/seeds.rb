# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

carnegie = User.create!(email: "acarnegie@gmail.com", password: "password1",fname: "Andrew", lname: "Carnegie", funds_available: 99999999)
gatsby = User.create!(email: "jgatsby@gmail.com", password: "password2",fname: "James", lname: "Gatsby", funds_available: 98750000)
buffett = User.create!(email: "wbuffett@gmail.com", password: "password3", fname: "Warren", lname: "Buffett", funds_available: 8000000)
demo = User.create!(email: "hiringmanager@gmail.com", password: "password4", fname: "Keely", lname: "Lee")

aapl = Stock.create!(ticker: "AAPL", company_name: "Apple, Inc.")
msft = Stock.create!(ticker: "MSFT", company_name: "Microsoft Corp.")
tsla = Stock.create!(ticker: "TSLA", company_name: "Tesla, Inc.")
fb = Stock.create!(ticker: "META", company_name: "Facebook, Inc.")
amzn = Stock.create!(ticker: "AMZN", company_name: "Amazon.com, Inc.")
nflx = Stock.create!(ticker: "NFLX", company_name: "Netflix, Inc.")

# big_five = Watchlist.create!(user_id: carnegie.id)
big_five = Watchlist.find(carnegie.portfolio.id)
nyc = Watchlist.find(buffett.portfolio.id)
cali = Watchlist.find(gatsby.portfolio.id)
# nyc = Watchlist.create!(user_id: buffett.id)
# cali = Watchlist.create!(user_id: gatsby.id)

mixed = Portfolio.find(carnegie.portfolio.id)
tech = Portfolio.find(buffett.portfolio.id)
travel = Portfolio.find(gatsby.portfolio.id)
# mixed = Portfolio.create!(user_id: carnegie.id)
# tech = Portfolio.create!(user_id: buffett.id)
# travel = Portfolio.create!(user_id: gatsby.id)

one = StocksWatchlist.create!(stock_id: aapl.id, watchlist_id: big_five.id)
two = StocksWatchlist.create!(stock_id: msft.id, watchlist_id: big_five.id)
three = StocksWatchlist.create!(stock_id: tsla.id, watchlist_id: big_five.id)
four = StocksWatchlist.create!(stock_id: fb.id, watchlist_id: big_five.id)
five = StocksWatchlist.create!(stock_id: amzn.id, watchlist_id: big_five.id)
six = StocksWatchlist.create!(stock_id: nflx.id, watchlist_id: big_five.id)

a = Transaction.create!(transaction_date: "2017-05-31", transaction_type: "purchase", shares: 16, price: 258.4125, portfolio_id: mixed.id, stock_id: tsla.id)
b = Transaction.create!(transaction_date: "2018-01-25", transaction_type: "purchase", shares: 15, price: 362.2158, portfolio_id: mixed.id, stock_id: tsla.id)
c = Transaction.create!(transaction_date: "2018-12-14", transaction_type: "purchase", shares: 9, price: 466.7201, portfolio_id: mixed.id, stock_id: tsla.id)
d = Transaction.create!(transaction_date: "2017-05-31", transaction_type: "purchase", shares: 36, price: 117.235, portfolio_id: mixed.id, stock_id: msft.id)
e = Transaction.create!(transaction_date: "2018-04-26", transaction_type: "purchase", shares: 4, price: 193.248, portfolio_id: mixed.id, stock_id: msft.id)
f = Transaction.create!(transaction_date: "2017-05-31", transaction_type: "purchase", shares: 7, price: 135.8725, portfolio_id: mixed.id, stock_id: aapl.id)
g = Transaction.create!(transaction_date: "2018-03-23", transaction_type: "purchase", shares: 29, price: 170.805, portfolio_id: mixed.id, stock_id: fb.id)
l = Transaction.create!(transaction_date: "2020-07-20", transaction_type: "purchase", shares: 32, price: 246.634, portfolio_id: mixed.id, stock_id: fb.id)
h = Transaction.create!(transaction_date: "2018-09-07", transaction_type: "purchase", shares: 5, price: 228.07, portfolio_id: mixed.id, stock_id: nflx.id)
i = Transaction.create!(transaction_date: "2019-04-04", transaction_type: "purchase", shares: 20, price: 362.40, portfolio_id: mixed.id, stock_id: nflx.id)
j = Transaction.create!(transaction_date: "2019-10-12", transaction_type: "purchase", shares: 11, price: 586.00, portfolio_id: mixed.id, stock_id: nflx.id)
k = Transaction.create!(transaction_date: "2018-10-12", transaction_type: "purchase", shares: 5, price: 1762.0295, portfolio_id: mixed.id, stock_id: amzn.id)
