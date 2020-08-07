## Renders basic info about a single user (email, id, fname, lname)
## Expects "user" param to be passed in 
## when rendering partial

json.extract! user, :id, :email, :fname, :lname
if user.profile_picture.attached?
    json.photo_url url_for(user.profile_picture)
end