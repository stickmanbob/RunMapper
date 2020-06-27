//////////////////// Route Show Container /////////////////////////////////
//
// 
//
//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import { fetchRoute } from "../../../actions/route_actions";
import ShowRoute from "./route_show";
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state, ownProps) {

    if (ownProps.route){
        return {
            route: state.entities.routes[ownProps.match.params.routeId],
            creator: state.entities.users[ownProps.route.creatorId]
        }
    } else {
        return {
            route: state.entities.routes[ownProps.match.params.routeId]
        }
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {
        fetchRoute: (id) => dispatch(fetchRoute(id))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowRoute); 