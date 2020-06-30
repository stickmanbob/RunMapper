/////////////////// My Routes ///////////////////////////
//  Displays the my_routes page
//  Props fom container: 
//  - formType, buttonType, buttonLink - all strings
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
    import RouteIndex from "./route_index_container";
    import WorkoutIndex from "../../workouts/workout_index/workout_index_container";
    import {Link} from "react-router-dom";

/////////////////////// Main ////////////////////////////////////////////

export default function MyRoutes({ formType, buttonType, buttonLink, indexComponent}) {
    var comp; 
    if(formType === "My Routes"){
        comp = <RouteIndex/>
    }else{
        comp = <WorkoutIndex/>
    }
    return (
        <section className="my-routes">
            <div className="banner">
                <h1>{formType}</h1>
                <Link className="create-button" to={buttonLink}>{buttonType}</Link>
            </div>

            {comp}
        </section>
    )
}
