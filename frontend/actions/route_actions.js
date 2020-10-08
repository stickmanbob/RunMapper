/////////////////////// Route Action Creators /////////////////////////////////

//////////// Imports //////////

    import * as routeAPIUtil from "../util/routes_util";

///////////////////////// Regular Action Creators /////////////////////////////

    export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
    export const receiveRoutes = (routes) =>{
        
        // Convert date strings to actual dates
        
        for (let key in routes){
            routes[key].createdAt = new Date(routes[key].createdAt); 
        }
        return {
            type: RECEIVE_ROUTES,
            routes: routes
        }
    }

    export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
    export const receiveRoute = (data) => {
        data.route.createdAt = new Date(data.route.createdAt); 
        return {
            type: RECEIVE_ROUTE,
            route: data.route,
            creator: data.creator 
        }
    }

    export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
    export const receiveRouteErrors = (errors) => {
        if(errors.responseJSON){
            return {
                type: RECEIVE_ROUTE_ERRORS,
                errors: errors.responseJSON
            }
        }else{
            return{
                type: RECEIVE_ROUTE_ERRORS,
                errors: errors
            }
        }
        
    }

    export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";
    export const clearRouteErrors = () => {
        return {
            type: CLEAR_ROUTE_ERRORS
        }
    }

    export const DELETE_ROUTE = "DELETE_ROUTE";
    export const removeRoute = (data) => {
        return {
            type: DELETE_ROUTE,
            route: data.route 
        }
    }

/////////////////////// Thunk Action Creators ////////////////////////////////

    //createRoute expects a history arguement corresponding to the 
    // history prop of a withRouter connected React element
    // On a succesful save, redirects user to their routes index
    export const createRoute = (route, history) => (dispatch) => {
        return routeAPIUtil.createRoute(route)
        .then((res)=> dispatch(receiveRoute(res)))
        .then((res)=> history.push("/routes/my_routes"))
        .fail((res)=> dispatch(receiveRouteErrors(res)));
    }

    export const fetchRoute = (routeId) => (dispatch) => {
        routeAPIUtil.fetchRoute(routeId)
        .then((res)=> dispatch(receiveRoute(res)))
        .fail((res)=> dispatch(receiveRouteErrors(res)));
    }
    
    export const fetchUserRoutes = (userId) => (dispatch) => {
        routeAPIUtil.fetchUserRoutes(userId)
        .then((res)=> dispatch(receiveRoutes(res)))
        .fail((res)=> dispatch(receiveRouteErrors(res)));
    }

    export const deleteRoute = (routeId) => (dispatch) => {
        routeAPIUtil.deleteRoute(routeId)
        .then((res) => dispatch(removeRoute(res)))
        .fail((res) => dispatch(receiveRouteErrors(res)));

    export const findRoutes = (params) => (dispatch) => {
        routeAPIUtil.findRoutes(params)
        .then((res) => dispatch(receiveRoutes(res)))
        .fail((res) => dispatch(receiveRouteErrors(res)));
    }
}







