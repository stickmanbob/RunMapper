/////////////////// Route Map ///////////////////////////
// Main google map used in creating a route
// This component is responsible for all of the route placement logic
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from 'react';
    
/// Components 
    import ToolWidget from "./tool_widget";
    import SideBar from "./route_creator_sidebar";
/////////////////////// Main ////////////////////////////////////////////

export default class RouteCreator extends React.Component {

    constructor(props) {
        super(props);
        
     //// Instance variables and State
        this.state = {
            distance: 0,
            routeData: "",
            imageUrl: "" 
        };
        this.routeCoordinates = [];
        
        
     //// Function Bindings
        
        this.addWaypoint = this.addWaypoint.bind(this); 
        this.updatePath = this.updatePath.bind(this); 
        this.renderRoute = this.renderRoute.bind(this);
        this.updateDistance = this.updateDistance.bind(this); 
        this.getStaticMapUrl = this.getStaticMapUrl.bind(this); 
        this.undoLastWaypoint = this.undoLastWaypoint.bind(this);
        this.initRouteRenderer = this.initRouteRenderer.bind(this);
        this.centerMap=this.centerMap.bind(this);   
        this.centerOnRoute = this.centerOnRoute.bind(this);
        this.clearMap = this.clearMap.bind(this);
         
        
    }

    componentDidMount() {

        //Get user's location and center the map
        navigator.geolocation.getCurrentPosition((res)=> this.initMap(res),(res)=>this.initMap(null)); 

    }

    initMap(res){

        let center = { lat: 37.7758, lng: -122.435 } //Default center for geolocation fail

        if(res){
            center = {lat: res.coords.latitude, lng: res.coords.longitude};
        } 

        const mapOptions = {
            center: center,
            zoom: 13,
            clickableIcons: false,
            draggableCursor: "crosshair",
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // Add event listener to map to add a waypoint on click
        this.map.addListener('click', this.addWaypoint);

        // create the directions requester

        this.dirService = new google.maps.DirectionsService();

        // Create Route Renderer

        this.initRouteRenderer();   
    }

  
    initRouteRenderer () {
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
            draggable: false 

        });

        // Update distance when route is dragged 
        // IMPT - feature is bugged, changes will not save (routeCoordinates not updated)
        this.routeRenderer.addListener("directions_changed",
            () => this.updateDistance(this.routeRenderer.getDirections())); 
    }

    // Adds a marker to the map on click and updates waypoints array and polyline
    addWaypoint(e){ 
        
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();

        let coords = {lat:lat, lng:lng}; 
        
        // Add coordinates to waypoints array
        this.routeCoordinates.push(coords); 
        
        //Update the polyline
        this.updatePath(); 
        
    }

    undoLastWaypoint() {

        // Remove the last waypoint
        this.routeCoordinates.pop(); 
        
        //Clear the map if the last waypoint is undone
        if(this.routeCoordinates.length === 0){
            this.clearMap();
            return; 
        } 

        this.updatePath();
    }



    // Requests new directions and renders them
    updatePath() {

        //Reset the renderer after a clear
        if (!this.routeRenderer) {
            this.initRouteRenderer()
        }

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

      // Prevent rendering a route with no waypoints
      
        if(this.routeCoordinates.length > 0){

            this.dirService.route(routeOpts ,this.renderRoute);

        } 
       
    }

    renderRoute(dirs) {
        this.routeRenderer.setDirections(dirs); 
        this.updateDistance(dirs); 
    }

    updateDistance(dirs){
       
        //Calculate distance by adding up length of each leg
        let dist = 0;

        dirs.routes[0].legs.forEach((leg)=>{
            dist += leg.distance.value;
        })

        let routeData = JSON.stringify(this.routeCoordinates);

        let imageUrl = this.getStaticMapUrl(dirs);

        this.setState({
            distance: dist,
            routeData: routeData,
            imageUrl: imageUrl
        }); 
    }

    centerMap(center){
        this.map.setCenter(center);
    }

    centerOnRoute () {

        // If no route displayed, do nothing
        if (this.routeCoordinates.length === 0){
            return; 
        }
        // Extract bounds from routeRenderer
        let dirs = this.routeRenderer.getDirections();
        
        let bounds = dirs.routes[0].bounds; 
        
       // Pan to bounds
        this.map.panToBounds(bounds, {
            bottom:300,
            top:300,
            left:400,
            right:600 
        });
         
    }

    clearMap() {

        //Do nothing if already cleared
        if (!this.routeRenderer){
            return; 
        }

        //First clear the coordinates
        this.routeCoordinates = [];
        // Then remove the route markers and line
        this.routeRenderer.setOptions({

            hideRouteList: true,
            map: this.map,
            suppressMarkers:true,
            suppressPolylines:true 

        });

        // Set the renderer to null to remove route completely
        // (Prevent the "flashing" bug from just re-enabling route polylines)
        this.routeRenderer = null; 

        //Finally, clear the distance and routeData
        this.setState({distance:0,
            routeData: ""
        })

    }

    

    //Generate a url that can be passed to an <img/> tag to display a route thumb
    getStaticMapUrl(dirs) {

      // Start with the basic url
        let baseUrl = "https://maps.googleapis.com/maps/api/staticmap?"
      // First extract the overall route polyline
        let path = dirs.routes[0].overview_polyline;
        path = "path=enc:".concat(path); 
      //Set the size
        let size = "size=100x100"
      // Fetch the API key
        let key = "key=".concat(window.googleAPIKey); 
      // Finish the url
        let url = [];
        url.push(baseUrl,size,path,key);
        url = url.join("&");
        return url; 

    }


    render() {
        
        return(
            <div className="Mapper-Widget">

                <SideBar distance={this.state.distance} 
                         routeData={this.state.routeData}
                         imageUrl={this.state.imageUrl}
                         centerMap={this.centerMap} 
                    />

                <div id="map-container">
                    
                    <div id="map" ref={map => this.mapNode = map}> </div>

                    <ToolWidget distance={this.state.distance} 
                        undo={this.undoLastWaypoint}
                        center={this.centerOnRoute}
                        clear={this.clearMap}

                    />

                </div>

           
            </div>
            

        )
    }
}