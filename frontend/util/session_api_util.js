/// Session API Util
/// Contains all ajax requests for interacting with user and session endpoints


// GET all users
export const fetchUsers = () =>{
    return $.ajax({
        url:"/api/users",
        method:"GET"
    })
}

// GET a user by ID
export const fetchUser = (id) => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: "GET"
    })
}


// POST a new user
export const postUser = user => $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user: user }
})

// POST a session (login)
export const postSession = user => $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user: user }
})

// DELETE a session (logout)
export const deleteSession = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
);