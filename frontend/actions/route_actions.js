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
    export const receiveRoute = (route) => {
        route.createdAt = new Date(route.createdAt); 
        return {
            type: RECEIVE_ROUTE,
            route: route
        }
    }

    export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
    export const receiveRouteErrors = (errors) => {
        return {
            type: RECEIVE_ROUTE_ERRORS,
            errors: errors.responseJSON
        }
    }

    export const DELETE_ROUTE = "DELETE_ROUTE";
    export const removeRoute = (route) => {
        return {
            type: DELETE_ROUTE,
            route: route 
        }
    }

/////////////////////// Thunk Action Creators ////////////////////////////////

    export const createRoute = (route) => (dispatch) => {
        routeAPIUtil.createRoute(route)
        .then((res)=> dispatch(receiveRoute(res)))
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
}







