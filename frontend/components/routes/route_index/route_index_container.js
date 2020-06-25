//////////////////// RouteIndexContainer /////////////////////////////////
// Passes the current routes state to the RouteIndex
// 
//
//////////////////// Imports ////////////////////////////////////////////
  /// Util
    import { connect } from 'react-redux';
    import {fetchUserRoutes, deleteRoute} from "../../../actions/route_actions"
  /// Components
    import RouteIndex from "./route_index";


/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    // Have to get an array of routes with creatorId === currentUser
    // let routes = Object.values(state.entities.routes);
    // let userRoutes = routes.filter((route)=>{
    //     return route.creatorId === state.session.currentUser
    // })  
    let routes = Object.values(state.entities.routes);
    routes.sort((a,b)=> b.createdAt - a.createdAt); 
    return{
        routes: routes,
        user: state.session.currentUser
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {
        fetchUserRoutes: (userId)=> dispatch(fetchUserRoutes(userId)),
        deleteRoute: (id) => dispatch(deleteRoute(id)) 
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RouteIndex); 