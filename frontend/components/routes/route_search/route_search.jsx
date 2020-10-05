/////////////////// Route Search Page ///////////////////////////
// 
// Search for routes based on location
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
/// Components



/////////////////////// Main ////////////////////////////////////////////

function RouteSearch(){

    // Set up the google places API on mount
    var locationService; 
    var dummyMap; 

    useEffect(()=>{

            locationService = new google.maps.places.PlacesService(dummyMap);

    }, [])

    // Bind form input

    const initalFormState = {
        query: "",
    }

    const [form, setForm] = useState(initalFormState);

    function handleChange(field){
        return (e) => {
            
            setForm({
                ...form,
                [field]: e.target.value,
            });
            
            console.log(form); 
        }
    }

    // Make a google places request
    function makeRequest(query) {

        let request = {
            query: query,
            fields: ["geometry"]
        }

        this.locationService.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(results); 
            }
        })

    }

    function handleSearch(e){
        e.preventDefaut();

        makeRequest()
    }
        

    return (

        <section className="route-search">
            <h1>Route Search</h1>

            <form>
                <div className="input-field">
                    <h2>Location</h2>
                    <input type="text" onChange={handleChange("query")}/>
                </div>

            </form>

            {/* Dummy element for places API to load */}
            <div id="dummymap" ref={dummyMap}> </div>
        </section>
        
    );
}

function mSTP(state){

}

export default connect(mSTP,null)(RouteSearch);