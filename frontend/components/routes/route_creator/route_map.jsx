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
        this.routeRenderer = new google.maps.DirectionsRenderer({
            
            hideRouteList: true,
            map: this.map,
            polyline: {
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            },
            preserveViewport: true,
            draggable: true 

        });
       

    }

  


    // Adds a marker to the map on click and updates waypoints array and polyline
    addMarker(e){ 
        
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();
        let coords = {lat:lat, lng:lng}; 
        
        // Add a marker to the map
        let marker = new google.maps.Marker({position:coords});
        marker.setMap(null); 
        // Add coordinates to waypoints array
        this.waypoints.push(marker); 
        
        //Update the polyline
        this.updatePath(); 
        
    }

    // Requests new directions and renders them
    updatePath() {

        let waypoints = this.waypoints.map((marker)=> {
            return {
                location: marker.position,
                stopover: false 
               
            }
        }).slice(1, this.waypoints.length -1); 
        
        let routeOpts = {
            origin: this.waypoints[0].position,
            destination: this.waypoints[this.waypoints.length -1].position,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
            waypoints: waypoints,
        }
        if(this.waypoints.length > 1){
            this.dirService.route(routeOpts ,this.renderRoute);
        }
       
    }

    renderRoute(route) {
        this.routeRenderer.setDirections(route); 

        let dirs = this.routeRenderer.getDirections();
        console.log(dirs);


    }



    render() {
        
        return(
            <div id="map-container">
                
                <div id="map" ref={map => this.mapNode = map}> </div>
            </div>
            

        )
    }
}