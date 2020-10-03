Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #### Default root view, app will render here #####
    root to: 'static_pages#root'
    
    
  ###################################################

  #### API Endpoints ##############
  
    
    namespace :api, defaults: {format: :json} do #defaults to json
      ## Users: create, show and destroy
       resources :users, only:[:create, :show, :update, :destroy] do
          ## All of a user's routes or workouts
          resources :routes, only: [:index] 
          resources :workouts, only: [:index]
       end
      
      ##Session: create and destroy
        resource :session, only: [:create, :destroy] 
      
      ## Routes: create, destroy, and show
        resources :routes, only: [:create, :show, :destroy]
        # Find by location
        get "routes", to: "routes#find_by_location"

      ## Workouts: create, destroy, and show
        resources :workouts, only: [:create, :show, :destroy] 
    end

##### Redirect other gets to React browser router ###############

  ## IMPT! this must go last
  # get '*path', to: 'static_pages#root'
  get "*path", to: "static_pages#root", constraints: -> (req) { !(req.fullpath =~ /^\/rails\/.*/ ) }
end
