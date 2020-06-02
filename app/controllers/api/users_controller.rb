class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
        login_user!(@user)
        render "/api/users/show"
    else
        flash[:errors] = @user.error.full_messages
        render :new
    end
  end
  
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :funds_available)
  end

end