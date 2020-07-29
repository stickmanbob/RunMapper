class Api::RoutesController < ApplicationController

    before_action :require_login, only: [:create, :destroy]

    def index
        @routes = Route.where(creator_id: params[:user_id]).order(created_at: :desc)
        render :index
    end

    def create 
        @route = Route.create(route_params)
        @route.creator_id = current_user.id

        if @route.save
            render :show
        else
            render json: @route.errors, status: 400 #Change if time for detailed errors 
        end
    end

    def show 
        @route = Route.find_by(id: params[:id])
        if @route
            render :show 
        else
            render json: ["Route not found!"], status: 404
        end
    end

    def destroy
        @route = Route.find_by(id: params[:id])

        if @route and @route.creator_id == current_user.id 
            # if the route has associated workouts, we do not want to destroy it entirely
            if @route.logged_workouts.length > 0
                @route.creator_id = nil
                @route.save!
            else
                @route.destroy
            end
            render :show 
        elsif @route and @route.creator_id != current_user.id 
            render json: ["Only the creator can delete this route"], status:401
        else
            render json: ["Route not found!"], status:404 
        end
    end

    private

    def route_params
        params.require(:route).permit(:name, :distance, :description, :image_url, :route_data, :activity)
    end
end
