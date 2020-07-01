/////////////////// Routes Reducer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities

/// Action Constants
    import {RECEIVE_ROUTES, 
            RECEIVE_ROUTE, 
            DELETE_ROUTE
            } from "../actions/route_actions";
    import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS } from "../actions/workout_actions";


/////////////////////// Main ////////////////////////////////////////////

export default function routesReducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            return Object.assign({},state, {[action.route.id]: action.route});
        case DELETE_ROUTE:
            
            let newState = Object.assign({},state);
            delete newState[action.route.id];
            
            return newState; 
        case RECEIVE_WORKOUTS:
            let routes = action.routes ? action.routes : {};
            return routes;
        case RECEIVE_WORKOUT:
            return Object.assign({},state,{[action.route.id]:action.route})
        default:
            return state; 
    }

}

