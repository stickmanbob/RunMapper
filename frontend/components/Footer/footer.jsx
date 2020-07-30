/////////////////// Footer ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default function Footer (props){
    let showPaths = ["/"];
    var showFooter;
    if (showPaths.includes(props.location.pathname)){
        showFooter = "show-footer"
    } else{
        showFooter = "hide-footer"
    }

    return(
        <footer className={`main-footer ${showFooter}`}>
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
                    <li><a target="_blank" href="https://github.com/stickmanbob/RunMapper">Check out our Github</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/ajay-rajamani-1789711b2/">Connect on LinkedIn</a></li>
                    <li><a target="_blank" href="https://angel.co/u/ajay-rajamani">Connect on AngelList</a></li>
                    
                </ul>

                <ul>
                    <li>Help</li>
                    <li><a target="_blank" href="https://github.com/stickmanbob/RunMapper/#readme">Readme</a></li>
                </ul>

                <ul>
                    <li>About Us</li>
                    <li><a target="_blank" href="https://ajay-rajamani.me">Portfolio</a></li>
                </ul>
            </div>
            

            <div className="bottom-span">

            </div>
        </footer>
    )
}