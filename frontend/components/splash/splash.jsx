/////////////////// Splash Page ///////////////////////////
// Main page for site
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
/// Components
import {Link} from "react-router-dom";



/////////////////////// Main ////////////////////////////////////////////

export default function Splash () {

    return(
        <div className="splash-page">
            <section className="splash-background one">
                <div className="splash-header" >
                    <hr/>
                    <h1>Choose Your Adventure</h1>
                    <hr/>

                    <p>The best integrated workout tracking experience,
                        all in one convenient place. Without any of the ads. 
                    </p>

                    <Link className="sign-up" to="/signup">SIGN UP</Link>

                </div>
            </section>
        </div>
    );
}