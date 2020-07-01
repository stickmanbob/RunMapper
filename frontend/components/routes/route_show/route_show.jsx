/////////////////// Route Show ///////////////////////////
// Renders the route google map and an overlay showing indfo (routeInfo)
// Props:
//  - route: route from state
//  - creator: route creator data (user)
//  - fetchRoute: (id) => fetches route info from database (includes creator info)

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components

    import RouteSidebar from "./route_info_sidebar"
    


/////////////////////// Main ////////////////////////////////////////////

    export default class RouteShow extends React.Component {

        constructor(props) {
            super(props);
            this.props_fetched = false; 
            this.state = {
                showDirections:false 
            }

            this.initRouteRenderer = this.initRouteRenderer.bind(this); 
            this.initMap = this.initMap.bind(this);
            this.toggleDirections = this.toggleDirections.bind(this); 
        }

        componentDidMount(){
            // Initialize state by fetching the route in question
            this.props.fetchRoute(this.props.match.params.routeId);

            this.initMap();
        }


        initMap () {
          // Initialize the map component
            
            const mapOptions = {
                center: { lat: 0, lng: 0 }, 
                zoom: 13,
                clickableIcons: false
            };

            this.map = new google.maps.Map(this.mapNode, mapOptions); 
            

            // Setup directions service and renderer
            this.dirService = new google.maps.DirectionsService();

            this.initRouteRenderer();

        }



        initRouteRenderer() {
            //add panel: this.dirNode to display directions 
            this.routeRenderer = new google.maps.DirectionsRenderer({

                hideRouteList: true,
                map: this.map,
                panel: this.dirNode,
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

        checkProps() {

            if((this.props.route && this.props.route.routeData && this.map) && !this.props_fetched) {

                let data = JSON.parse(this.props.route.routeData)
                
                this.renderRoute(data); 
               
                this.props_fetched = true 
             
            }
        }

        renderRoute(coordinates){

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
            this.dirService.route(routeOpts, (dirs)=> this.routeRenderer.setDirections(dirs))

            // Reset the map center to the rendered route 
            this.map.setCenter(coordinates[0]); 
        }

        toggleDirections(e){
            e.preventDefault(); 
            
            if (this.routeRenderer.panel){
                this.setState({ showDirections: false }, () => this.routeRenderer.setPanel(null)); 
            } else {
                 
                this.setState({ showDirections: true }, () => this.routeRenderer.setPanel(this.dirNode)); 
            }
             
            
        }


        render () {
                this.checkProps(); 


                // Must pass an empty route and creator to the render

                if(!this.props_fetched){
                    var route =  {
                        name: "", 
                        creatorId: null, 
                        createdAt: new Date()
                    };

                    var creator = { fname: "", lname: "" }
                } else {
                    var route = this.props.route;
                    var creator = this.props.creator
                }
                 
                

                if (this.routeRenderer){
                    console.log(this.state.showDirections, this.routeRenderer.panel); 
                }

                return(

                    <section className="show-route-container">

                        <header className="banner">
                            <h1>{route.name}</h1>
                        </header>

                        <nav className="route-actions">
                            <a onClick={this.toggleDirections}>Show Directions</a>
                        </nav>

                        <section className="route-container">
                            
                            <section className="route-body">
                                
                                <section className= 'show-map-container'>
                                    <div id="map" className="show-map" ref={map => this.mapNode = map}> </div>
                                    
                                    { this.state.showDirections &&
                                        <div className="directions-panel">    
                                            <div id="directions" ref={dirs => this.dirNode = dirs}></div>
                                        </div>
                                    }

                                </section>
                                
                            </section>

                            <RouteSidebar creator={creator} route={route}/>

                    </section>
                </section>
                )
      
        }
    }
