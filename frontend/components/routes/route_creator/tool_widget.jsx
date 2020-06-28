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

export default class ToolWidget extends React.Component{
     
    handleButton(action) {
        return (e) => { 
            e.preventDefault();
            action();
        }
    }
    render() {
        return (
            <div className="tool-widget">
                <header className="tool-header">
                    <DistanceCounter distance={this.props.distance}/> 
                    <div className="tool expand-trigger"></div>
                </header>
                <div className="tool-dropdown">
                    <nav className="buttons">
                        <button onClick={this.handleButton(this.props.undo)}
                                                 className="tool-button undo">

                            <i className="fa fa-undo" aria-hidden="true"> </i>
                            <span>UNDO</span>
                        </button>

                        <button className="tool-button clear"></button>
                        <button onClick={this.handleButton(this.props.center)} className="tool-button center">CENTER</button>
                    </nav>
                </div>
            </div>
        )
    }
}
