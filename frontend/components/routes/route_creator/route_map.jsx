/////////////////// Route Map ///////////////////////////
// Main google map used in creating a route
// This component is responsible for all of the route placement logic
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from 'react';
import { render } from 'react-dom';
/// Components 



/////////////////////// Main ////////////////////////////////////////////

export default class RouteMap extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {};
        this.waypoints = [];
        this.legs = []; 
        
     //// Function Bindings
        
        this.addMarker = this.addMarker.bind(this); 
        this.updatePath = this.updatePath.bind(this); 
        this.renderRoute = this.renderRoute.bind(this);
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // Add event listener to map to add a waypoint on click
        this.map.addListener('click', this.addMarker); 

        // create the directions requester

        this.dirService = new google.maps.DirectionsService();
       

    }

  


    // Adds a marker to the map on click and updates waypoints array and polyline
    addMarker(e){ 
        
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();
        let coords = {lat:lat, lng:lng}; 
        
        // Add a marker to the map
        let marker = new google.maps.Marker({position:coords, map:this.map});
        
        // Add coordinates to waypoints array
        this.waypoints.push(coords); 
        
        //Update the polyline
        this.updatePath(); 
        
    }

    // Requests new directions and renders them
    updatePath() {
        
        let routeOpts = {
            origin: this.waypoints[this.waypoints.length - 2],
            destination: this.waypoints[this.waypoints.length -1],
            travelMode: "WALKING",
            provideRouteAlternatives: false
        }
       this.dirService.route(routeOpts ,this.renderRoute);
       
    }

    renderRoute(route) {
        let renderLeg = new google.maps.DirectionsRenderer({
            directions: route,
            hideRouteList: true,
            map: this.map,
            polyline: {
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2}

        })

        this.legs.push(renderLeg); 

    }

    render() {
        
        return(
            <div id="map-container">
                
                <div id="map" ref={map => this.mapNode = map}> </div>
            </div>
            

        )
    }
}