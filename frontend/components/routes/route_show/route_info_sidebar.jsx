/////////////////// Route info Sidebar ///////////////////////////
// Renders route info on side of map on show page
// Props:
//  - route: route data object
//  - creator: creator data object 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class RouteSidebar extends React.Component {

    convertDistance(dist) {
        return (0.000621371 * dist).toFixed(2);
    }

    render(){
        const {route, creator} = this.props; 
        return(
            <section className="route-info-sidebar">
                <div className="creator">
                    <h3>Created By: {creator.fname} {creator.lname}</h3>
                </div>

                <div className="metrics">
                    <ul>
                        <li>
                            <span className="info-item-value">
                                {this.convertDistance(route.distance)} Miles
                                        </span>

                            <span className="info-item-name">
                                Distance:
                                        </span>
                        </li>

                    </ul>
                </div>
            </section>
        )
    }
}