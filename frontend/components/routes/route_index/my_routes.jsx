/////////////////// My Routes ///////////////////////////
//  Displays the my_routes page
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
    import RouteIndex from "./route_index_container";
    import {Link} from "react-router-dom";

/////////////////////// Main ////////////////////////////////////////////

export default function MyRoutes () {

    return (
        <section className="my-routes">
            <div className="banner">
                <h1>MY ROUTES</h1>
                <Link className="create-button" to="/routes/create">CREATE A ROUTE</Link>
            </div>

            <RouteIndex/>
        </section>
    )
}
