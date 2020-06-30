/////////////////////// Workout Action Creators /////////////////////////////////

//////////// Imports //////////

    import * as workoutAPIUtil from "../util/workout_api_util";

///////////////////////// Regular Action Creators /////////////////////////////

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";

export const receiveWorkouts = (data) => {
    
    // Convert date strings to actual dates

    for (let key in data.workouts) {
        data.workouts[key].startDatetime = new Date(data.workouts[key].startDatetime);
    }


    return {
        type: RECEIVE_WORKOUTS,
        workouts: data.workouts,
        routes: data.routes,
        // users:data.users 
    }
};

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";

export const receiveWorkout = (data) => {
    return {
        type: RECEIVE_WORKOUT,
        workout: data.workout,
        user: data.user,
        route: data.route 
    }
};

export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";
export const receiveWorkoutErrors = (errors) => {
    return {
        type: RECEIVE_WORKOUT_ERRORS,
        errors: errors.responseJSON
    }
}

export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const removeWorkout = (data) =>{
    return {
        type: REMOVE_WORKOUT,
        workout: data.workout 
    }
}

/////////////////////// Thunk Action Creators ////////////////////////////////

/// Add history argument once component is final
export const createWorkout = (workout,date) => (dispatch) => {
    return workoutAPIUtil.postWorkout(workout,date)
        .then((res)=> dispatch(receiveWorkout(res)))
        .fail((res)=>dispatch(receiveWorkoutErrors(res)))
}

export const fetchWorkout = (id) => (dispatch) => {
    workoutAPIUtil.fetchWorkout(id)
        .then((res) => dispatch(receiveWorkout(res)))
        .fail((res) => dispatch(receiveWorkoutErrors(res)));
}

export const fetchUserWorkouts = (userId) => (dispatch) => {
    workoutAPIUtil.fetchUserWorkouts(userId)
        .then((res) => dispatch(receiveWorkouts(res)))
        .fail((res) => dispatch(receiveWorkoutErrors(res)));
}

export const deleteWorkout = (id) => (dispatch) => {
    workoutAPIUtil.destroyWorkout(id)
        .then((res) => dispatch(removeWorkout(res)))
        .fail((res) => dispatch(receiveWorkoutErrors(res)));
}


