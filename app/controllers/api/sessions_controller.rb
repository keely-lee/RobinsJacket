class Api::SessionsController < ApplicationController

#  def new
    # render :new
#  end

  def create
    debugger
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login!(@user)
      render "api/users/show" #remove later
    else
      render json: ['! Unable to log in with provided credentials.'], status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {} 
    else
      render json: @user.errors.full_messages, status: 404
    end
  end
  
  def user_params
    params.require(:user).permit(:email, :password)
  end


end