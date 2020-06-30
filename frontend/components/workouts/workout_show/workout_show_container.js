//////////////////// Workout Show Container /////////////////////////////////

// 

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import { fetchWorkout } from "../../../actions/workout_actions";
import ShowWorkout from "./workout_show";
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state,ownProps) {
    let workout = state.entities.workouts[ownProps.match.params.workoutId];
    return {
        workout: workout,
        routes: state.entities.routes,
        users: state.entities.users 
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {
        fetchWorkout: (id) => dispatch(fetchWorkout(id))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowWorkout); 