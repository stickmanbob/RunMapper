users = []
routes = []

json.workouts do 
    @workouts.each do |workout|
        json.set! workout.id do
            
            json.partial! "api/workouts/workout", workout:workout
            users << workout.user unless users.include?(workout.user)
            routes << workout.route unless routes.include?(workout.route) 
        end
    end
end 

json.routes do 
    routes.each do |route|
        json.set! route.id do
            json.partial! "api/routes/route", route:route 
        end
    end
end

## Uncomment if need to send down users. DONT FORGET TO MODIFY CONTROLLER (N+1)!

# json.users do 
#     users.each do |user|
#         json.set! user.id do
#             json.partial! "api/users/user", user:user 
#         end
#     end
# end

