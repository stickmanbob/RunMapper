# Detail of single route
# takes instance varaible @route

json.route do
    json.partial! "/api/routes/route", route:@route

    json.extract! @route, :route_data
end

json.creator do 
    json.extract! @route.creator, :id, :fname, :lname 
end