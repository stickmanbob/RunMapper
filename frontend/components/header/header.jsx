/////////////////// Header ///////////////////////////
// Renders a header with nav and greeting component
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from 'react';
    import {Link} from 'react-router-dom';
/// Components 
    import GreetingContainer from './greeting_container';


/////////////////////// Main ////////////////////////////////////////////

export default function Header () {
    return(

        <div className="main-header"> 
            <header className="nav-header">
                <img src={window.logo} alt=""/>
                <nav className="nav-links">
                    <div className="nav-bar dropdown-container">
                        <Link className="nav-link" to="/routes/">ROUTES</Link>
                        <ul className="dropdown-menu nav-bar">
        
                            <Link className="dropdown-menu-item nav-bar" to="/routes/create"> Create Route</Link>
                            <Link className="dropdown-menu-item nav-bar" to="/routes/my_routes">My Routes</Link>
                            
                        </ul>
                    </div>
                </nav>
                <GreetingContainer />
            </header>
        </div>
    )
}