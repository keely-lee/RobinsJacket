class Api::TransactionsController < ApplicationController

  def index # see all trans
    @transactions = Transaction.all(transaction_params) ###
    if @transactions
      render "/api/transactions/index"
    else
      render json: @transactions.errors.full_messages, status: 422
    end
  end

  def show # see specific trans detail
    @transaction = Transaction.find_by(transaction_params[:id])
    if @transaction
      render "/api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 404
    end
  end

  def create
    @stock = Stock.find_by(ticker: transaction_params[:ticker])
    @stock ||= Stock.create!(ticker: transaction_params[:ticker], company_name: transaction_params[:company_name])
    if @stock
      @transaction = Transaction.new(transaction_params.merge({
        portfolio_id: current_user.portfolio.id,
        stock_id: @stock.id
      }))
      if @transaction.save
        render "/api/transactions/show"
      else
        render json: @transaction.errors.full_messages, status: 400
      end
    else
      render json: @stock.errors.full_messages, status: 400
    end
  end


  private
  def transaction_params
    params.require(:transaction).permit(:transaction_date, :transaction_type, :shares, :price, :ticker, :company_name)
  end
  
end