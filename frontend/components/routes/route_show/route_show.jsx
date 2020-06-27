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
    


/////////////////////// Main ////////////////////////////////////////////

    export default class RouteShow extends React.Component {

        constructor(props) {
            super(props);
            this.props_fetched = false; 
            this.state = {
                test: 0 
            }
            this.initRouteRenderer = this.initRouteRenderer.bind(this); 
            this.initMap = this.initMap.bind(this);
        }

        componentDidMount(){
            // Initialize state by fetching the route in question
            this.props.fetchRoute(this.props.match.params.routeId);
            this.setState({
                test:1 
            })

            this.initMap();
        }

        componentDidUpdate(){
       
            if (this.mapNode && !this.map) {
                //init map?
            }
        }

        initMap () {
          // Initialize the map component
            
            const mapOptions = {
                center: { lat: 37.7758, lng: -122.435 }, 
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

            this.dirService.route(routeOpts, (dirs)=> this.routeRenderer.setDirections(dirs))
        }

        render () {
                this.checkProps(); 
                let route = this.props.route || {name: "", creatorId: null} ;
            // if (this.props_fetched){
                return(
                    <section className="route-show">
                        <h1>{route.name}</h1>
                        <div className= 'show-map-container'>
                            
                            <div id="map" ref={map => this.mapNode = map}> </div>
                        </div>
                        <div id="directions" ref={dirs => this.dirNode = dirs}></div>


                    </section>
                )
            // } else {
            //     return (
            //         <div>Loading...</div>
            //     )
            // }
        }
    }
