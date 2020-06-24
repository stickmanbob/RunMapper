/////////////////// Distance Counter ///////////////////////////
// keeps track of the current run distance
// needs distance as a prop
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components

export default function DistanceCounter ({distance}) {

    return (
        <div className="distance-counter">
            <h3 >Distance: </h3>
            <h1>{distance} Miles </h1>
        </div>
    )
}


/////////////////////// Main ////////////////////////////////////////////

