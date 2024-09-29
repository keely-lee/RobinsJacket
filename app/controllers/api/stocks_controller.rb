class Api::StocksController < ApplicationController 

  # def index
  #   @stocks = Stock.all
  #   render :index
  # end

  def create
    # [TODO KL]: fix better find/new
    @stock = Stock.find_by(ticker: stock_params[:ticker])
    if @stock
      render :show
    else
      @stock = Stock.new(stock_params)
      if @stock.save
        render :show
      else
        render json: @stock.errors.full_messages, status: 422
      end
    end
  end

  def show
    @stock = Stock.find_by(ticker: stock_params[:ticker])
    if @stock
      render :show
    else
      render json: ['Stock not currently in vault'], status: 422
    end
  end

  def destroy
    @stock = Stock.find_by(ticker: stock_params[:ticker])
    @stock.destroy
    render json: @stock
  end

  protected
  def stock_params
    params.require(:stock).permit(:ticker, :company_name)
  end
end