class Api::TransactionsController < ApplicationController

  def index #see all trans
    @transactions = Transaction.all(transaction_params) ###
    if @transactions
      render "/api/transactions/index"
    else
      render json: @transactions.errors.full_messages, status: 422
    end
  end

  def show #see specific trans detail
    @transaction = Transaction.find_by(transaction_params[:id])
    if @transaction
      render "/api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      # render "/api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 400
  end


  private
  def transaction_params
    params.require(:portfolio_id).permit(:transaction_date, :transaction_type, :shares, :price, :stock_id, )
  end
  
end