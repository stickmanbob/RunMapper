/////////////////// Location Search ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class LocationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.centerMap = this.props.centerMap;
    }

    render(){
        return (
            
                <div className="location-search-container">
                    <label> Choose Map Location</label>
                    <form onSubmit={this.centerMap} className="location-search">
                        <input type="text" className="search-bar" />
                        <input type="submit" value="Search" />
                    </form>
                </div>
        
        )
    }
}

