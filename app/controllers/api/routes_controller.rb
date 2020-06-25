class Api::RoutesController < ApplicationController

    def index
        @routes = Route.where(creator_id: params[:user_id])
        render :index
    end

    def create 
        @route = Route.create(route_params)
        @route.creator_id = current_user.id

        if @route.save
            render :show
        else
            render json: @route.errors.full_messages #Change if time for detailed errors 
        end
    end

    def show 
        @route = Route.find(params[:id])
        render :show 
    end

    def destroy
        @route = route.find(params[:id])

        if route.creator_id == current_user.id 
            @route.destroy
            render :show 
        else
            render json: ["Only the creator can delete this route"], status:401
        end
    end

    private

    def route_params
        params.require(:route).permit(:name, :distance, :description, :image_url, :route_data)
    end
end
