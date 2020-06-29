json.workout do 
    json.extract! @workout,  :id, :user_id, :route_id, :duration, :start_datetime, :notes, :activity
end 

json.user do 
    json.partial! "/api/users/user", user:@workout.user
end

json.route do
    json.extract! @workout.route, :id, :name, :route_data, :distance 
end

