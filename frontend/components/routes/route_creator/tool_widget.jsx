/////////////////// Tool Widget ///////////////////////////
// Renders the ToolHeader(containint the distanceCounter and toolDropdownTrigger)
// as well as the ToolDropdown
// needs to take in the action props from RouteCreator (clear, undo, center)
//  and distance prop

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components 
    import DistanceCounter from './distance_counter';



/////////////////////// Main ////////////////////////////////////////////

export default function ToolWidget({distance}) {
    distance = distance.toFixed(2); 
    return (
        <div className="tool-widget">
            <header className="tool-header">
                <DistanceCounter distance={distance}/> 
                <div className="tool expand-trigger"></div>
            </header>
            <div className="tool-dropdown">
                <nav className="buttons">
                    <button className="tool-button undo"></button>
                    <button className="tool-button clear"></button>
                    <button className="tool-button center"></button>
                </nav>
            </div>
        </div>
    )
}
