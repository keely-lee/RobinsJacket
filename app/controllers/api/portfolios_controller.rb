class Api::PortfoliosController < ApplicationController
  
  def show
    @portfolio = current_user.portfolio
    if @portfolio
      render "/api/portfolios/show"
      # render api_portfolio_url(@portfolio)
    else
      render json: @portfolio.errors.full_messages, status: 422
    end
  end

end