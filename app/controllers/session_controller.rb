class SessionController < ApplicationController

  def new
    # render :new
  end

  def create
    @user = User.find_by(email: params[:email])
    if !@user.nil?
      login!(@user)
      # redirect_to user_url(@user) 
    else
      flash.new[:errors] = @user.errors.full_messages
      # render :new 
    end
  end

  def delete
    logout!
    redirect_to new_api_session_url #new session
  end
  
end