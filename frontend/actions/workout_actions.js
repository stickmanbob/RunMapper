/////////////////////// Workout Action Creators /////////////////////////////////

//////////// Imports //////////

    import * as workoutAPIUtil from "../util/workout_api_util";

///////////////////////// Regular Action Creators /////////////////////////////

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";

export const receiveWorkouts = (workouts) => {
    
    // Convert date strings to actual dates

    for (let key in workouts) {
        workouts[key].startDatetime = new Date(workouts[key].startDatetime);
    }

    return {
        type: RECEIVE_WORKOUTS,
        workouts: workouts 
    }
};

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";

export const receiveWorkout = (workout) => {
    return {
        type: RECEIVE_WORKOUT,
        workout: workout
    }
};



