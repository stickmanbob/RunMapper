/////////////////// Sidebar///////////////////////////
// 
//  Renders the sidebar containing all route detail fields (name, etc)
//  and the submit button. This component will be responsible for submitting.
//  
//      Props:
//          - distance: from parent RouteMapper
//          - routeData: serialized json of the route itself. From parent's 
//                 route_coordinates array
//           - centerMap: function to modify parent component (map)

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
   import RouteDetails from "./route_details";
   import LocationSearch from "./location_search.jsx"; 



/////////////////////// Main ////////////////////////////////////////////

export default function Sidebar (props) {
    // { distance, routeData, centerMap }
    let centerMap = "";
    let distance = 5;
    let routeData = [];
    return (
    
        
        <section className='map-sidebar'>
            <LocationSearch centerMap={centerMap} /> 
            <RouteDetails distance={props.distance} 
                        routeData={props.routeData}  
                        finalizeState={props.finalizeState}            
            />
        </section>

    )
}