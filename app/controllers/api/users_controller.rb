class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
        login!(@user)
        render "/api/users/show"
    else
        render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = current_user
    if @user.save
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 400
    end
  end
  
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :funds_available, :watchlist)
  end

end