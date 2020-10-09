class Api::RoutesController < ApplicationController

    before_action :require_login, only: [:create, :destroy]

    def index
        @routes = Route.where(creator_id: params[:user_id]).order(created_at: :desc)
        render :index
    end

    # Query the database for routes based on coordinates
    def find_by_location

        return if !valid_search_params?
        
        sanitize_search_params

        lat = params[:lat]
        lng = params[:lng]
        search_radius = params[:radius]
        activity = params[:activity]
        min_dist = params[:min_dist]
        max_dist = params[:max_dist]
        limit = params[:limit]
        page = params[:page]


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

    # Sanitize query parameters from request
    def sanitize_search_params

        params[:activity] ||= Route::ACTIVITY_TYPES
        params[:radius] ||= 20 # Default 20 mile radius 
        params[:limit] = params[:limit] ? params[:limit].to_i : 20
        params[:page] = params[:page] ? params[:page].to_i : 1
        params[:min_dist] = params[:min_dist].to_i
        params[:max_dist] = params[:max_dist].to_i == 0 ? Float::INFINITY : params[:max_dist].to_i

    end

    # Validate required search params
    def valid_search_params?

        is_valid = true

        # Check for required params
        if !params[:lat] || !params[:lng]
            render json: {
                location: "Invalid Location"
            }, status: 400

            is_valid = false

            return is_valid
        end

    end

end
