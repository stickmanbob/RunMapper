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
                <h1>RunMapper</h1>
                <nav className="nav-links">
                    <Link className="nav-link" to="/routes/create">Create Route</Link>
                </nav>
                <GreetingContainer />
            </header>
        </div>
    )
}