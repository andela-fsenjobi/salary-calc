Rails.application.routes.draw do
  get 'states/index'
  get 'job_title/search'
  get 'welcome/calculate'
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
