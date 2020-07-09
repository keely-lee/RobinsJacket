class Api::StocksWatchlistsController < ApplicationController
  def create
    # debugger
    @stock = Stock.new(stocks_params)
    debugger
    unless @stock.save
      render json: @stock.errors.full_messages, status: 404
    end
    debugger

    @watchlist = current_user.watchlist
    @stock_watch = StocksWatchlist.new(@stock.id, @watchlist.id)
    # debugger
    if @stock_watch.save
      render "/api/users/show"
      # render json: @watchlist
    else
      render json: @stock_watch.errors.full_messages, status: 422
    end
  end

  protected
  def stocks_params
    params.require(:stock).permit(:ticker, :company_name)
  end

end