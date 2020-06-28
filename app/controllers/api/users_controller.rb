class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)

        if @user.save
           
            login_user!(@user)
            
            render :show
        else
            render json: @user.errors, status: 401
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render :show 
        else
            render json: ["User not found!"], status: 404
        end
    end
end
