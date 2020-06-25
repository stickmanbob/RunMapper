/////////////////// Route Errors Reducer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities

/// Action Constants
    import {RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE} from '../actions/route_actions'


/////////////////////// Main ////////////////////////////////////////////

export default function routeErrorsReducer(state = {}, action) {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            return action.errors;
        case RECEIVE_ROUTE:
            return {};
        default:
            return state; 
    }

}