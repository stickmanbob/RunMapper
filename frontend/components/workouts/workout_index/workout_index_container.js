//////////////////// Workout Index Container /////////////////////////////////
//
// 
//

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import WorkoutIndex from "./workout_index";
import { fetchUserWorkouts,deleteWorkout } from "../../../actions/workout_actions";

/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    
    let workouts = Object.values(state.entities.workouts)
    workouts.sort((a, b) => b.startDatetime - a.startDatetime);
    
 
    return {
        workouts: workouts,
        routes: state.entities.routes, 
        user: state.session.currentUser 
    }
}

const mapDispatchtoProps = function (dispatch,ownProps) {
    
    return {
        fetchWorkouts: (id)=> dispatch(fetchUserWorkouts(id)),
        deleteWorkout: (id) => dispatch(deleteWorkout(id))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(WorkoutIndex); 