Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #### Default root view, app will render here #####
    root to: 'static_pages#root'
  ###################################################

  #### API Endpoints ##############
  
    
    namespace :api, defaults: {format: :json} do #defaults to json
      ## Users: create, show and destroy
       resources :users, only:[:create, :show, :destroy]
      
      ##Session: create and destroy
        resource :session, only: [:create, :destroy] 
    end
end
