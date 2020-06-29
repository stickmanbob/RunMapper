/////////////////// Workout Errors Reducer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities

/// Action Constants
    import {RECEIVE_WORKOUT_ERRORS} from "../actions/workout_actions"


/////////////////////// Main ////////////////////////////////////////////

export default function __Reducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            return action.errors 
        default:
            return state 

    }

}