## Renders detailed info about a single user
## Expects instance variable @user (active record user) from controller

json.partial! "/api/users/user", user:@user # id and username




