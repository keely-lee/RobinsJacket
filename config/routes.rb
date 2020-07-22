Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    
    resources :watchlists, only: [:show, :update, :destroy]
    resources :transactions, only: [:index, :show, :create]
    resources :stocks, only: [:index, :show]
    resources :portfolios, only: [:show]
    resources :stocks_watchlists, only: [:create, :destroy]
  end
  
end