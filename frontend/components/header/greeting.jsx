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
    import UserDropDown from './dropdown';


/////////////////////// Main ////////////////////////////////////////////

export default function Greeting ({currentUser, logout}) {

    if(currentUser) {
        return (
            <UserDropDown currentUser={currentUser} logout={logout}/>
        )
    } else {
        return (
            <div className="greeting">
                <Link to="/login" className="nav-auth-button login"> LOG IN</Link>

                <Link to="/signup" className="nav-auth-button signup" > SIGN UP</Link>
            </div>
        )
    }
}