//////////////////// My_Workouts Container /////////////////////////////////
//
// Wrapper for my_routes.jsx. File is shared between this and my_routes container
// Must pass in props for type of page and creation button function
//

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';

import MyWorkouts from "../../routes/route_index/my_routes"; // Actually the my_routes component
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    return {
        formType: "My Workouts",
        buttonType: "Create a Workout",
        buttonLink: "/workouts/create",
        
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {};
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MyWorkouts); 