/////////////////// Workout Map ///////////////////////////
// Renders a map based on a route
// Expects a "route" prop with routeData attribute
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class Map extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let routePath = JSON.parse(this.props.route.routeData);
        this.initMap(routePath);
        
        this.renderRoute(routePath); 

    }

    initMap(routePath) {
        // Initialize the map component

        const mapOptions = {
            center: routePath[0],
            zoom: 13,
            clickableIcons: false
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);


        // Setup directions service and renderer
        this.dirService = new google.maps.DirectionsService();

        this.initRouteRenderer();

    }



    initRouteRenderer() {
        this.routeRenderer = new google.maps.DirectionsRenderer({

            hideRouteList: true,
            map: this.map,
            polyline: {
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            },draggable: false
        });
    }

    renderRoute(coordinates) {

        // First, map the route coordinates into google maps Waypoint literals

        let waypoints = coordinates.map((waypoint) => {
            return {
                location: waypoint,
                stopover: false

            }
        }).slice(1, coordinates.length - 1);


        // Define the route options for the new path

        let routeOpts = {
            origin: coordinates[0],
            destination: coordinates[coordinates.length - 1],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
            waypoints: waypoints,
        }

        //Request google for a new route via the Directions API, then 
        // pass the directions to the renderer
        this.dirService.route(routeOpts, (dirs) => this.routeRenderer.setDirections(dirs))

    }

    render(){
        return(
            <div id="map" className="workout-map" ref={map => this.mapNode = map}>
                
            </div>
        )
    }
}