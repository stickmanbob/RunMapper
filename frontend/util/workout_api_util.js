/// Workout API Util
/// Contains all ajax requests for interacting with Workout endpoints

export const fetchUserWorkouts = (id) => {
    return $.ajax({
        url: `/api/users/${id}/workouts`,
        method: "GET"
    });
}

export const fetchWorkout = (id) => {
    return $.ajax({
        url: `/api/workouts/${id}`,
        method: "GET"
    });
}

export const destroyWorkout = (id) => {
    return $.ajax({
        url: `/api/workouts/${id}`,
        method: "DELETE"
    });
}

export const postWorkout = (workout) => {
    return $.ajax({
        url: `/api/workouts/`,
        method: "POST",
        data: {workout: workout} 
    });
}

