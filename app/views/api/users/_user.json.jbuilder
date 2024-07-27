# json.extract! user, :id, :email, :fname, :lname, :funds_available, :watched_stocks, :portfolio

json.set! :user, user.id
  json.id user.id
  json.email user.email
  json.first_name user.fname
  json.last_name user.lname
  json.funds_available user.funds_available
  json.portfolio user.portfolio

  json.watched_stocks do
    user.watched_stocks.each do |stock|
      json.set! stock.ticker do
        json.ticker stock.ticker
        json.id stock.id
        json.company_name stock.company_name
      end
    end
  end
