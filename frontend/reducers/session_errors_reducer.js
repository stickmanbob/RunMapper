/////////////////// Session Errors Reducer ///////////////////////////
// Handles RECEIVE_SESSION_ERRORS action
// Updates state with errors from response
// RECEIVE_CURRENT_USER clears errors. All others do nothing. 

/////////////////// Imports /////////////////////////////////////////

 /// Utilities

 /// Action Constants
    import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions"


/////////////////////// Main ////////////////////////////////////////////

export default function sessionErrorsReducer (state={}, action){
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return state; 
    }
}
