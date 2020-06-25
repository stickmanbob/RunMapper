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
        this.inputs = {
            name: "",
            description: ""
        }

    }

    handleSubmit(e) {
        e.preventDefault();

     
    }

    handleChange(field) {

    }


    render() {
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