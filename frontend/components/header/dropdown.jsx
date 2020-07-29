/////////////////// User Dropdown ///////////////////////////
// Renders the user's profile picture which is also a dropdown trigger. 
// Dropdown menu has links to Friends and Logout button
// Expects a "logout" prop containing a dispatchable logout action
// as well as a "currentUser" prop with the current user data

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";

/// Components 



/////////////////////// Main ////////////////////////////////////////////

export default class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this); 
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout(); 
    }
    render() {
        return (
            <div className="dropdown-container">
                <h1 className="temp-dropdown-banner">{this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
                <ul className="dropdown-menu">
                    <li className="dropdown-menu-item" onClick={this.handleLogout}>Log Out</li>
                </ul>
            </div>
           

        )
    }
}