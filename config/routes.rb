Rails.application.routes.draw do

  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "contact", to: "pages#contact", as: :contact
  get "atelier", to: "pages#atelier", as: :atelier
  # get "instruments", to: "pages#instruments" do
  #   collection do
  #     resources :flute, :saxophone
  #   end
  # end
  get 'instruments/', to: "instruments#index", as: :instruments
  get 'instruments/vents'
  get 'instruments/cuivres'
  get "qui_sommes_nous", to: "pages#qui_sommes_nous", as: :qui_sommes_nous
  get "presse", to: "pages#presse", as: :presse
end
