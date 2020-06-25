/////////////////// Route Details ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class RouteDetails extends React.Component {
    constructor(props) {
        super(props);

    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.finalizeState();
        console.log(this.props.distance, this.props.routeData) 
    }


    render() {
        console.log("rendered");
        return(
            <div>
                <header>
                    Route Details
                </header>

                <form >
                    <input type="text" placeholder="Route name"/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        )
    }
}