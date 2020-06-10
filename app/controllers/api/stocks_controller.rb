class Api::StocksController < ApplicationController 
  def index
    @stocks = Stock.all
    render :index
  end

  def show
    @stock = Stock.find_by_id(id)
    if @stock
      render :show
    else
      render @stock.errors.full_messages, status: 422
    end
  end

end