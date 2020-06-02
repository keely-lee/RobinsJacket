

#json.set! @user.id do 
  json.extract! @user, :id, :email, :fname, :lname, :funds_available
#end
# still need :portfolio_id, transactions ID array