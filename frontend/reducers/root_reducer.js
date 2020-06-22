//////////////////// Root Reducer //////////////////////////

import {combineReducers} from 'redux';
import {sessionReducer} from "./session_reducer";
import {usersReducer} from "./users_reducer";


export default combineReducers({
    users: usersReducer,
    session: sessionReducer,
})

/*
///////////////////STATE SHAPE////////////////////////

{

  entities:{
     users:{
              1:{
                 id: 1
                 username: "Bob"
                 route_ids: [1]
                 friend_ids: [2,4]
               }
            }
     routes:{

             1:{
                id:1,
                name: "Horse Loop",
                distance: 6.1,
                description: "A hard 6 mile loop from
                             the reservoir to the ridgeline and back",
                creator_id: 1,
                route_metadata: {
                     waypoints: [ {lat:xxx, lng:xxx},
                                  {lat:xxx, lng:xxx},
                                 {lat:xxx, lng:xxx}
                                 ]
                               }
             }
          }

      workouts:{
                 1:{
                     user_id: 1,
                     route_id: 1,
                     date: 04-06-2020,
                     time: 13:04:23,
                    }
              }
      comments:{
                 routes:{
                         commentable_id: 1
                         commentable_type: "route"
                         author_id: 2
                         body: "This was a really hard run! Thanks for sharing!"
                         }
                 workouts: {}
                 replies: {}
               }

}

session: {
          id: 1
         }

errors: {
         session: []
        }
}


*/