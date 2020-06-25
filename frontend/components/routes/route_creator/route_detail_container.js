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

function mDTP (dispatch) {
    return {
        createRoute: (route) => dispatch(createRoute(route))
    };
};

export default connect(mSTP, mDTP)(routeDetails); 