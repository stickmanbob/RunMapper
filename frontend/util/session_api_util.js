/// Session API Util
/// Contains all ajax requests for interacting with user and session endpoints

export const fetchUsers = () =>{
    return $.ajax({
        url:"/api/users",
        method:"GET"
    })
}

export const fetchUser = (id) => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: "GET"
    })
}

export const postUser = user => $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user: user }
})

export const postSession = user => $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user: user }
})

export const deleteSession = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
);