/////////////////// Route Detail Container ///////////////////////////
// 
// Passes the createRoute dispatch action as a prop
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
    import {createRoute} from "../../../actions/route_actions";
    import { receiveRouteErrors } from "../../../actions/route_actions";
    import { connect } from "react-redux";
    import { toggleButtons } from "../../../actions/button_actions";
/// Components
    import routeDetails from "./route_details"; 


/////////////////////// Main ////////////////////////////////////////////

function mSTP (state) {
    return {
        errors: state.errors.routes,
        hideButtons: state.ui.buttons.hideButtons,
    };
};

// createRoute maps the createRoute action to props. Expects the route and 
// the component's history prop (from withRouter) 
function mDTP (dispatch) {
    return {
        createRoute: (route,hist) => dispatch(createRoute(route,hist)),
        receiveRouteErrors: (errors) => dispatch(receiveRouteErrors(errors)),
        toggleButtons: () => dispatch(toggleButtons()),
    };
};

export default connect(mSTP, mDTP)(routeDetails); 