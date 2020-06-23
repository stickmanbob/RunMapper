//////////////////// Greeting ////////////////////////
// Renders on top right of page, in the header
// If not logged in, displays links to sign up and login pages
// If logged in, renders user's picture which is a dropdown menu (<UserMenu/>)

//// Props 

//  Has props "currentUser" (user data) and "logout" (function that 
//  dispatches logout) from container 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from 'react'
/// Components 
    import {Link} from 'react-router-dom'; 




/////////////////////// Main ////////////////////////////////////////////

export default function Greeting ({currentUser, logout}) {

    if(currentUser) {
        return (
        <h1>Welcome, {currentUser.fname} {currentUser.lname}</h1>
        )
    } else {
        return (
            <div>
                <Link to="/signup"> Sign Up</Link>
                <Link to="/login"> Log In</Link>
            </div>
        )
    }
}