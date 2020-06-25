# Detail of single route
# takes instance varaible @route

json.partial! "/api/routes/route", route:@route

json.extract! @route, :route_data