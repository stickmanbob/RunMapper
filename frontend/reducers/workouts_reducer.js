/////////////////// Workouts Reducer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    
/// Action Constants
    import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS, REMOVE_WORKOUT } from "../actions/workout_actions";


/////////////////////// Main ////////////////////////////////////////////

export default function workoutsReducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WORKOUTS:
            return {workouts: action.workouts};
        case RECEIVE_WORKOUT:
            return Object.assign({}, state, {[action.workout.id]:action.workout});
        case REMOVE_WORKOUT:
            let newstate = Object.assign({},state);
            delete newstate[action.workout.id];
            return newstate; 
        default:
            return state; 
    }

}