class Api::StocksWatchlistsController < ApplicationController
  def create
    @stock = Stock.find_by(ticker: stocks_params[:ticker])
    @stock ||= Stock.new(stocks_params)

    unless @stock.save
      render json: @stock.errors.full_messages, status: 404
    end

    @watchlist = current_user.watchlist
    @stock_watch = StocksWatchlist.new(stock_id: @stock.id, ticker: @stock.ticker, watchlist_id: @watchlist.id)
    if @stock_watch.save
      @user = current_user
      render "/api/users/show"
    else
      render json: @stock_watch.errors.full_messages, status: 422
    end
  end

  def destroy
    @stock_watch = StocksWatchlist.find_by(stock_id: params[:id], watchlist_id: current_user.watchlist.id)
    @stock_watch ||= StocksWatchlist.find_by(ticker: params[:id], watchlist_id: current_user.watchlist.id)
    # TODO KL: delete/fix

    if @stock_watch
      @stock_watch.destroy
      @user = current_user
      render "/api/users/show"
    else
      render json: @stock_watch.errors.full_messages, status: 422
    end
  end


  protected
  def stocks_params
    params.require(:stock).permit(:ticker, :company_name)
  end

end