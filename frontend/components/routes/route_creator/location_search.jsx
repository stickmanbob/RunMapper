/////////////////// Location Search ///////////////////////////
// 
//  Renders a search bar used to find location and center the map
// expects a "centerMap" function to be passed as prop from 
// routeCreator > routeCreatorSidebar > this

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class LocationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.centerMap = this.props.centerMap;
        
        this.state={
            input:""
        }

        // Function bindings
        this.handleChange=this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeRequest = this.makeRequest.bind(this); 
        
    }

    componentDidMount(){
        
        this.locationService = new google.maps.places.PlacesService(this.mapNode);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }


    // Make a google places request and on success, center the map
    makeRequest(query) {
         
        let request = {
            query: query,
            fields: ["geometry"]
        }

        this.locationService.findPlaceFromQuery(request, (results, status) => {
            if (status=== google.maps.places.PlacesServiceStatus.OK) {
                this.props.centerMap(results[0].geometry.location); 
            }
        })
        
    }

    handleSubmit(e){
        e.preventDefault();

        // Don't waste requests on empty searches 
        if (this.state.input.length > 0) {
            this.makeRequest(this.state.input); 
        }
    }

    render(){
        return (
            
                <section className="location-search-container">
                    <div>
                        <label> Choose Map Location</label>
                        <form onSubmit={this.handleSubmit} className="location-search">
                            <input onChange={this.handleChange("input")} type="text" className="search-bar" />
                            <input className="search-button" type="submit" value="Search" />
                        </form>
                    </div>
                    {/* Dummy element for places API to load */}
                    <div id="dummymap" ref={map => this.mapNode = map}> </div>
                </section>
        
        )
    }
}

