/// Routes API Util
/// Contains all ajax requests for interacting with routes endpoint

export const fetchUserRoutes = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/routes/`,
        method: "GET"
    });
}

export const fetchRoutesByTitle = (title) => {
    return $.ajax({
        url:"/api/routes",
        method:"GET",
        data: title 
    });
}

export const fetchRoute = (id) => {
    return $.ajax({
        url: `/api/routes/${id}`,
        method: "GET"
    });
}

export const deleteRoute = (id) => {
    return $.ajax({
        url: `/api/routes/${id}`,
        method: "DELETE"
    });
}

export const createRoute = (route) => {
    return $.ajax({
        url: `/api/routes/`,
        method: "POST",
        data: {route:route} 
    });
}