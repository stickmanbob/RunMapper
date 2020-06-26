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
            
                <section className="location-search-container">
                    <div>
                        <label> Choose Map Location</label>
                        <form onSubmit={this.centerMap} className="location-search">
                            <input type="text" className="search-bar" />
                            <input className="search-button" type="submit" value="Search" />
                        </form>
                    </div>
                </section>
        
        )
    }
}

