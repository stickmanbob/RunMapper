/////////////////////// Route Action Creators /////////////////////////////////

//////////// Imports //////////

    import * as routeAPIUtil from "../util/routes_util";

///////////////////////// Regular Action Creators /////////////////////////////

    export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
    export const receiveRoutes = (routes) =>{
        return {
            type: RECEIVE_ROUTES,
            routes: routes
        }
    }

    export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
    export const receiveRoute = (route) => {
        return {
            type: RECEIVE_ROUTE,
            route: route
        }
    }
}
