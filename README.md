# <img src="./app/assets/images/logo.png">

RunMappr is a workout tracking app aimed at endurance sports. It allows users to create maps of their running/biking/hiking routes over the google maps API and save them for future reference. Saved routes can then be logged as workouts using the itegrated workout tracker. Logged workouts automatically calculate average pace in units based on the activity.  

## Live Link: https://run-mapper.herokuapp.com/

## Technology stack

* Backend: Ruby on Rails

* Frontend: React/Redux

* Mapping software: Google Maps API

## Front End

# User Profiles

Users can create profiles to sign in to the app from the main page. A demo user is also availible for viewing the app's features before signing up.

# Dashboard

On login, users are routed to their dashboard. The dashboard has tabs for viewing both saved routes and their workout log, as well as links on both pages to create a new route or log a new workout respectively. The user can also delete routes and workouts from the dashboard view.

# Route Show Page

Clicking on a route in the dashbaord directs the user to a detailed show view of the route. Users can view the route map as well as Google directions by pressing the "Show Directions" button. From this view, pressing the "Log as Workout" button redirects the user to the workout logger with the current route already selected.

# Workout Show page

Clicking on a workout in the dasboard directs the user to a detailed view of their workout. From here, clicking the "View Route" button redirects to the associated route's show page where they can view route info and log another workout. Depending on the type of workout, "Average Pace" will be displayed as either minutes/mile (Running, Walking, Hiking, Other) or MPH (Biking).

# Route Creator

The route creator is accessible from the dashboard "Routes" tab by clicking "Create Route", and also from the main nav header by hovering over "Routes" and clicking the "Create Route" button in the dropdown. The map can be centered on any location in the world by using the search bar in the top left. Routes are built by clicking the map to add a waypoint to that spot. A path is automatically calculated between the previous waypoint and the one just added. Users can add as many waypoints as they need in a chain like fashion. If the user makes a mistake, the widget on the right contains "Undo" and "Clear" buttons which will remove the last waypoint or clear the map, respectively. The "Center" button re-centers the map over the currently drawn route if one exists, otherwise it does nothing. Finally, users can select the primary activity type for the route, add a descruption if desired, and hit "Save Route". 

# Workout Logger

The workout logger is accessible from the dashboard "Workouts" tab or from the main nav header by hovering over "Workouts" and clicking "Log Workout".