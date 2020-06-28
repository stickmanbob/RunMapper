class Api::SessionsController < ApplicationController
    def create
        
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login_user!(@user)
            render "/api/users/show"
        else
            render json: ["Invalid Email or Password"], status: 401
        end
      
    end

    def destroy
       
        if logged_in?
            logout_user(current_user)
            render json: {} 
        else
            render json: ['Not logged in'], status: 404
        end
       
    end
end
