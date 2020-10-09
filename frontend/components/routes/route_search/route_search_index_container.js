//////////////////// RouteSearchIndexContainer /////////////////////////////////
// Passes the current routes state to the RouteIndex for the Route Search component
// 
//
//////////////////// Imports ////////////////////////////////////////////
/// Util
import { connect } from 'react-redux';
/// Components
import RouteIndex from "../route_index/route_index";


/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    // Have to get an array of routes with creatorId === currentUser
    // let routes = Object.values(state.entities.routes);
    // let userRoutes = routes.filter((route)=>{
    //     return route.creatorId === state.session.currentUser
    // })  

    let routes = Object.values(state.entities.routes);
    return {
        routes: routes,
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {
        fetchUserRoutes: () => null,
        deleteRoute: () => null
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RouteIndex); 