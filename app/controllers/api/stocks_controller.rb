class Api::StocksController < ApplicationController 

  # def index
  #   @stocks = Stock.all
  #   render :index
  # end

  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      render json: @stock
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  def show
    @stock = Stock.find_by_id(id)
    if @stock
      render :show
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  def destroy
    @stock = Stock.find_by(ticker: params[:ticker])
    @stock.destroy
    render json: @stock
  end

  protected
  def stock_params
    params.require(:stock).permit(:ticker, :company_name)
  end
end