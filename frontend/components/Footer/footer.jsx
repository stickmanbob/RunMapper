/////////////////// Footer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default function Footer (){

    return(
        <footer className="main-footer">
            <div className="top-span">
                <img src={window.logo} alt=""/>

                <ul>
                    <li>RUN</li>
                    <li>WALK</li>
                    <li>HIKE</li>
                    <li>FITNESS</li>
                </ul>

            </div>

            <div className="middle-span">
                <ul>
                    <li>Social</li>
                    <li><a href="https://github.com/stickmanbob/RunMapper">Check out our Github</a></li>
                    <li><a>Connect on LinkedIn</a></li>
                    
                </ul>

                <ul>
                    <li>Help</li>
                    <li>Account Settings</li>
                    <li>Coming Soon</li>
                </ul>

                <ul>
                    <li>About Us</li>
                    <li>Single Developer</li>
                    <li>Needs Job</li>
                </ul>
            </div>
            

            <div className="bottom-span">

            </div>
        </footer>
    )
}