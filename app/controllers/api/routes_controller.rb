class Api::RoutesController < ApplicationController

    before_action :require_login, only: [:create, :destroy]

    def index
        @routes = Route.where(creator_id: params[:user_id]).order(created_at: :desc)
        render :index
    end

    # Query the database for routes based on coordinates
    def find_by_location
        
        # Get query parameters from request
        
        activity = params[:activity] || Route::ACTIVITY_TYPES
        search_radius = params[:radius]
        lat = params[:lat]
        lng = params[:lng]
        min_dist = params[:min_dist] || 0
        max_dist = params[:max_dist] || Float::INFINITY 
        limit = params[:limit] || 20
        page = params[:page] || 1

        # Calculate offset based on current page (starts at 1) and page limit
        offset = (page-1) * limit

        # Query routes
        @routes = Route.within(search_radius, origin: [lat,lng])
                        .where(private?: false)
                        .where("routes.activity IN (?)", activity)
                        .where(distance: (min_dist..max_dist))
                        .limit(limit)
                        .offset(offset)

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
