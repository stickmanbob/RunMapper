/////////////////// Header ///////////////////////////
// Renders a header with nav and greeting component
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from 'react';
    import { connect } from "react-redux";
    import {Link} from 'react-router-dom';
/// Components 
    import GreetingContainer from './greeting_container';


/////////////////////// Main ////////////////////////////////////////////

function Header (props) {
    let navStatus = ""; 
    if (!props.loggedIn){
        navStatus = "hide"
    }
    return(

        <div className="main-header"> 
            <header className="nav-header">

                <Link to="/"><img src={window.logo} alt="" /></Link>
                
                <nav className={`nav-links ${navStatus}`}>

                    <div className="nav-bar dropdown-container">
                        <span className="nav-link" to="">ROUTES</span>
                        <ul className="dropdown-menu nav-bar">
        
                            <Link className="dropdown-menu-item nav-bar" to="/routes/create"> Create Route</Link>
                            <Link className="dropdown-menu-item nav-bar" to="/routes/my_routes">My Routes</Link>
                            <Link className="dropdown-menu-item nav-bar" to="/routes/find_routes">Find Routes</Link>
                            
                        </ul>
                    </div>

                    <div className="nav-bar dropdown-container">

                        <span className="nav-link" to="">WORKOUTS</span>

                        <ul className="dropdown-menu nav-bar">
                            <Link className="dropdown-menu-item nav-bar" to="/my_home/rw_dashboard/workouts"> My Workouts</Link>
                            <Link className="dropdown-menu-item nav-bar" to="/workouts/new">Log Workout</Link>
                        </ul>

                    </div>
                </nav>
                <GreetingContainer />
            </header>
        </div>
    )
}

function mSTP(state){
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

export default connect(mSTP, null)(Header); 

