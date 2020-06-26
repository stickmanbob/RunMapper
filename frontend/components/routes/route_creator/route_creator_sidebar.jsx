/////////////////// Sidebar///////////////////////////
// 
//  Renders the sidebar containing all route detail fields (name, etc)
//  and the submit button. This component will be responsible for submitting.
//  
//      Props:
//          - distance: from parent RouteMapper
//          - routeData: serialized json of the route itself. From parent's 
//                 route_coordinates array
//          - imageUrl: imageUrl for route thumbnail
//           - centerMap: function to modify parent component (map)

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
   import RouteDetails from "./route_detail_container";
   import LocationSearch from "./location_search.jsx"; 



/////////////////////// Main ////////////////////////////////////////////

export default function Sidebar (props) {
    // { distance, routeData, centerMap }
    let centerMap = "";
    
    return (
    
        <section className='map-sidebar'>
            <LocationSearch centerMap={props.centerMap} /> 
            <RouteDetails distance={props.distance} 
                        routeData={props.routeData}
                        imageUrl={props.imageUrl}            
            />
        </section>

    )
}