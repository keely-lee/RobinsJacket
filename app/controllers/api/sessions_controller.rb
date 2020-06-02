class Api::SessionsController < ApplicationController

#  def new
    # render :new
#  end

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login!(@user)
      render "api/users/show" #remove later
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def delete
    if current_user
      logout!
      render {} #error if no current user
    else
      render json: @user.errors.full_messages, status: 404
    end
  end
  
  def user_params
    params.require(:user).permit(:email, :password)
  end


end