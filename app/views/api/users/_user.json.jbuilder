## Renders basic info about a single user (username, id)
## Expects "user" param to be passed in 
## when rendering partial

json.extract! user, :id, :username