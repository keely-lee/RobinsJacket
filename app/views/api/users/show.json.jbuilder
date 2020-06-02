

json.extract! @user, :id do 
  json.extract! @user, :id, :email, fname: :lname, :funds_available, :portfolio_id
  #still need transactions ID array
end