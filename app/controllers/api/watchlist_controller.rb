class Api::WatchlistsController < ApplicationController

  # def create
  #   @watchlist = Watchlist.new(user_id: current_user)
  #   user = current_user
  #   watchlist.user_id = user.id

    # if watchlist.save
  #     render json: @watchlist
  #   else
  #     render json: @watchlist.errors.full_messages, status: 422
  #   end
  # end

  def show
    @watchlist = current_user.watchlist

    if @watchlist
      render "/api/watchlists/show"
      #render json: @watchlist
    else
      render json: watchlist.errors.full_messages, status: 422
    end
  end

  def update
    @watchlist = current_user.watchlist

    if @watchlist.save(watchlist_params)
      render "/api/watchlists/show"
      #render json: @watchlist
    else
      render json: watchlist.errors.full_messages, status: 422
    end
  end

  protected
  # def watchlist_params
  #   params.require(:watchlist).permit(:stocks)
  # end

  def stocks_watchlist_params
    params.require(:stocks_watchlist).permit(:stock_id, :watchlist_id)
  end

end