/////////////////// Route Search Page ///////////////////////////
// 
// Search for routes based on location
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Needed to use ES6 features with Babel
import "regenerator-runtime/runtime";


/// Components



/////////////////////// Main ////////////////////////////////////////////

class RouteSearch extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            query: "",
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.getPlace = this.getPlace.bind(this); 
    }


    componentDidMount(){
    // Set up the google places API on mount

        this.locationService = new google.maps.places.PlacesService(this.dummyMap);
    
    }


    // Returns an event handler to bind a form input to the form stateful object
    handleChange(field){

        return (e) => {
            
            this.setState({
                [field]: e.target.value,
            });
        }
    }

    // Make a google places request
    async getPlace() {

        let request = {
            query: this.state.query,
            fields: ["geometry"]
        }

       this.locationService.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                return results;
            } else{
                console.log("failed to find place!")
            }
        })

        return place; 
    }

    async handleSearch(e){
        e.preventDefault();
        
       const place = await this.getPlace();
        
       console.log(place || "not found")
    }
       
    render(){

        return (

            <section className="route-search">
                <h1>Route Search</h1>

                
                    <div className="input-field">
                        <h2>Location</h2>
                        <input type="text" onChange={this.handleChange("query")}/>
                    </div>

                    <button onClick={this.handleSearch}>
                        Search Routes                    
                    </button>
                
                <div ref={dummy => this.dummyMap = dummy}></div>
            </section>
            
        );

    }
}

function mSTP(state){

}

export default connect(mSTP,null)(RouteSearch);