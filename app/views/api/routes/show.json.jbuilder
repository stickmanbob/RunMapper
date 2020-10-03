# Detail of single route
# takes instance varaible @route

json.route do
    json.partial! "/api/routes/route", route:@route

    json.extract! @route, :route_data, :private?
end

if @route.creator_id 
    json.creator do 
        json.extract! @route.creator, :id, :fname, :lname 
    end
end 