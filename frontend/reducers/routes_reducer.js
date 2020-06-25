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
        default:
            return state; 
    }

}

