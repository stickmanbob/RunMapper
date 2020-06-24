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
        
        this.state = {distance: 0};
        this.routeCoordinates = [];
        this.legs = []; 
        
     //// Function Bindings
        
        this.addMarker = this.addMarker.bind(this); 
        this.updatePath = this.updatePath.bind(this); 
        this.renderRoute = this.renderRoute.bind(this);
        this.updateDistance = this.updateDistance.bind(this); 
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

        // Create Route Renderer
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

        // this.routeRenderer.addListener("directions_changed", this.updateDistance(this.routeRenderer.getDirections()))
       

    }

  


    // Adds a marker to the map on click and updates waypoints array and polyline
    addMarker(e){ 
        
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();

        let coords = {lat:lat, lng:lng}; 
        
        // // Create a 
        // let marker = new google.maps.Marker({position:coords});
        
        // Remove it from the map to reduce clutter
        // marker.setMap(null);
        
        // Add coordinates to waypoints array
        this.routeCoordinates.push(coords); 
        
        //Update the polyline
        this.updatePath(); 
        
    }

    // Requests new directions and renders them
    updatePath() {

        // First, map the route coordinates into google maps Waypoint literals

        let waypoints = this.routeCoordinates.map((waypoint)=> {
            return {
                location: waypoint,
                stopover: false 
               
            }
        }).slice(1, this.routeCoordinates.length -1); 
        

        // Define the route options for the new path

        let routeOpts = {
            origin: this.routeCoordinates[0],
            destination: this.routeCoordinates[this.routeCoordinates.length -1],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
            waypoints: waypoints,
        }

        // Prevent rendering a route with only one waypoint
        // Render a start marker instead 
        if(this.routeCoordinates.length > 1){
            this.dirService.route(routeOpts ,this.renderRoute);
        } else if (this.routeCoordinates.length === 1){
            var start = new google.maps.Marker({
                position: this.routeCoordinates[0],
                map: this.map 
            })
        }

      
       
    }

    renderRoute(route) {
        this.routeRenderer.setDirections(route); 

        let dirs = this.routeRenderer.getDirections();
        
        this.updateDistance(dirs); 

    }

    updateDistance(dirs){
        let dist = 0;
        dirs.routes[0].legs.forEach((leg)=>{
            dist += leg.distance.value;
        })

        console.log(dist); 
        this.setState({distance:dist}); 
    }



    render() {
        
        return(
            <div id="map-container">
                
                <div id="map" ref={map => this.mapNode = map}> </div>
            </div>
            

        )
    }
}