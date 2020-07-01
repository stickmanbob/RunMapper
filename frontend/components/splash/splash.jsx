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

            <section className="splash-background two">
                <div className="splash-header">
                    <div className="splash-header" >
                        <hr />
                        <h1>Find Your Way Anywhere</h1>
                        <hr />

                        <p>
                            Map workouts anywhere on the globe. 
                            Save your favorites for the next time
                            you're ready to go.
                        </p>

                        <div className="location-lists">
                            <ul>
                                <li>New York, NY</li>
                                <li>Manhattan, NY</li>
                                <li>San Fransicso, CA</li>
                                <li>Austin, TX</li>
                                <li>Denver, CO</li>
                                <li>Seattle, WA</li>
                            </ul>

                            <ul>
                                <li>San Diego, CA</li>
                                <li>Portland, OR</li>
                                <li>Chicago, IL</li>
                                <li>Honolulu, HI</li>
                                <li>Tallahassee, Fl</li>
                                <li>Boston, MA</li>
                            </ul>

                            <ul>
                                <li>Dublin, Ireland</li>
                                <li>Christchurch, New Zealand</li>
                                <li>Vancouver, Canada</li>
                                <li>Edinburgh, Scotland</li>
                                <li>United States</li>
                                <li>Find Your City</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}