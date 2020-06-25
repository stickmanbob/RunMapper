/////////////////// Distance Counter ///////////////////////////
// keeps track of the current run distance
// needs distance as a prop
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components

export default function DistanceCounter ({distance}) {
    
    let milesDist = (0.000621371 * distance).toFixed(2);

    return (
        <div className="distance-counter">
            <h3 >Distance: </h3>
            <h1>{milesDist} Miles </h1>
        </div>
    )
}


/////////////////////// Main ////////////////////////////////////////////

