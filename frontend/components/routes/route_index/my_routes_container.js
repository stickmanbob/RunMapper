//////////////////// My_Routes Container /////////////////////////////////
//
// Wrapper for my_routes.jsx. File is shared between this and my_workouts container
// Must pass in props for type of page and creation button function
//

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';

import MyRoutes from "./my_routes"
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    return {
        formType: "My Routes",
        buttonType: "Create a Route",
        buttonLink: "/routes/create",
        
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {}; 
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MyRoutes); 