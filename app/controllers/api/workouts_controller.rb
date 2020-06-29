class Api::WorkoutsController < ApplicationController

before_action :require_login, only: [:create, :destroy]

    def index
        user = User.find_by(id: params[:user_id])
        if user 
            @workouts = user.workouts.includes(:route, :user) 
            render :index 
        else
            render json: ["User not Found!"], status: 404
        end
    end

    def create

        @workout = Workout.new(workout_params)
        date = DateTime.civil_from_format(:local, *date_params)
        @workout.user_id = current_user.id
        @workout.start_datetime = date 
        if @workout.save
            render :show
        else
            render json: @workout.errors
        end
        
    end

    def show 
        @workout = Workout.find_by(id:params[:id])
        if @workout
            render :show 
        else
            render json: ["Workout not found!"], status:404
        end
    end

    def destroy

        @workout = Workout.find_by(id: params[:id])
        
        if @workout and @workout.user_id == current_user.id 
            @workout.destroy
            render :show 
        elsif @workout and @workout.user_id != current_user.id 
            render json: ["Only the creator can delete this workout"], status:401
        else
            render json: ["Workout not found!"], status:404 
        end
    end

    private

    def workout_params
        params.require(:workout).permit(:route_id, :duration, :notes, :activity)
    end

    #Required to process date info from javascript front end during #create
    def date_params
        data = params.require(:date).permit(:year, :month, :day, :hours, :minutes)
        values = data.values 
        values.map! do |datum|
            datum.to_i
        end
        
        return values 
    end
end
