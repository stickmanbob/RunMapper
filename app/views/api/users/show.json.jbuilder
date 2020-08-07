## Renders detailed info about a single user
## Expects instance variable @user (active record user) from controller

json.partial! "/api/users/user", user:@user # email, id, fname, lname

if @user.profile_picture.attached?
    json.photo_url url_for(@user.profile_picture)
end