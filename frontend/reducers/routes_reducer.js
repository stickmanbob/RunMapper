/////////////////// Routes Reducer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities

/// Action Constants
    import {RECEIVE_ROUTES, 
            RECEIVE_ROUTE, 
            } from "../actions/route_actions";


/////////////////////// Main ////////////////////////////////////////////

export default function routesReducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            return Object.assign({},state, {[action.route.id]: action.route});
        default:
            return state; 
    }

}

