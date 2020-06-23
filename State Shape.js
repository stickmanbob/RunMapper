{  
    entities:{ 
        
        users:{ 
            
                1:{
                     id: 1,
                     email: "bob1234@gmail.com",
                     fname: "Bob",
                     lname: "Jones", 
                   }
                },  

         routes:{

                 1: {
                    id:1,
                    name: "Horse Loop",
                    distance: 6.1,
                    description: "A hard 6 mile loop from the reservoir to the ridgeline and back",
                    creatorId: 1,
                    routeMetadata: { 
                        waypoints: [ {lat:xxx, lng:xxx}, 
                                      {lat:xxx, lng:xxx}, 
                                     {lat:xxx, lng:xxx}
                                     ]
                                   }
                 }
              },
         
          workouts:{ 
                     1:{
                         userId: 1,
                         routeId: 1,
                         date: 04-06-2020,
                         time: 13:04:23,
                        }
                  },  
          comments:{ 
                     routes:{
                             commentableId: 1
                             commentableType: "route"
                             authorId: 2
                             body: "This was a really hard run! Thanks for sharing!"
                             }
                     workouts: {}
                     replies: {}
                   }
 

    },

    session: {
        currentUser: 1
    },
    errors: {
        session: {
            fname: ["can't be blank"]
        }
    }
}