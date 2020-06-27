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
    
    let route = state.entities.routes[ownProps.match.params.routeId];
    if(route){
        return {
            route: route,
            creator: state.entities.users[route.creatorId]
        }
    }else {
        return {
            route:route 
        }
    }

}

const mapDispatchtoProps = function (dispatch) {
    return {
        fetchRoute: (id) => dispatch(fetchRoute(id))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowRoute); 