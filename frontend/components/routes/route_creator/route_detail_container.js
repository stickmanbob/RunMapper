/////////////////// Route Detail Container ///////////////////////////
// 
// Passes the createRoute dispatch action as a prop
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
    import {createRoute} from "../../../actions/route_actions";
    import { connect } from "react-redux";
/// Components
    import routeDetails from "./route_details"; 


/////////////////////// Main ////////////////////////////////////////////

function mSTP (state) {
    return {};
};

// createRoute maps the createRoute action to props. Expects the route and 
// the component's history prop (from withRouter) 
function mDTP (dispatch) {
    return {
        createRoute: (route,hist) => dispatch(createRoute(route,hist))
    };
};

export default connect(mSTP, mDTP)(routeDetails); 