//////////////////// New Workout Container /////////////////////////////////

// 

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import {createWorkout} from '../../../actions/workout_actions';
import { fetchUserRoutes } from "../../../actions/route_actions"
import { toggleButtons } from "../../../actions/button_actions";
import { clearWorkoutErrors } from "../../../actions/workout_actions";
import NewWorkout from "./new_workout";
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    let allRoutes = Object.values(state.entities.routes) ;
    let currentUser = state.session.currentUser;
    let routes = allRoutes.filter((route)=> route.creatorId === currentUser);
    routes.sort((a, b) => b.createdAt - a.createdAt); 
    return {
        routes: routes,
        currentUser: currentUser,
        errors: state.errors.workouts,
        hideButtons: state.ui.buttons.hideButtons,
    };
}

const mapDispatchtoProps = function (dispatch) {
    return{
        createWorkout: (workout,history) => dispatch(createWorkout(workout,history)),
        fetchUserRoutes: (id) => dispatch(fetchUserRoutes(id)),
        toggleButtons: () => dispatch(toggleButtons()),
        clearWorkoutErrors: () => dispatch(clearWorkoutErrors())
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NewWorkout); 