/////////////////// Route Details ///////////////////////////
// 
//      Props: 
//          - distance: from parent RouteMapper
//          - routeData: serialized json of the route itself. From parent's
//                 route_coordinates array
//          - createRoute: (route) => from container

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
    import {withRouter} from "react-router-dom"; 
/// Components



/////////////////////// Main ////////////////////////////////////////////

class RouteDetails extends React.Component {
    constructor(props) {
        super(props);

      /// Initalize state to empty field values
        this.state = {
            name: "",
            description: ""
        }

      /// Function bindings
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        // build out the route with all our data
        let route = Object.assign({},this.state);

        // add data passed in from map
        route["route_data"] = this.props.routeData;
        route["distance"] = this.props.distance; 
        route["image_url"] = this.props.imageUrl; 

        // Submit route and pass withRouter history prop
        this.props.createRoute(route,this.props.history); 
     
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value 
        })
    }


    render() {
        return(
            <div>
                <header>
                    Route Details
                </header>

                <form onSubmit = {this.handleSubmit}>
                    <input onChange={this.handleChange("name")} 
                            type="text" placeholder="Name this Map" 
                            value={this.state.name}/>

                    <input type="submit" value="Save Route"/>

                    <input onChange={this.handleChange("description")} 
                            type="text" placeholder="Describe this Map"/>
                </form>
            </div>
        )
    }
}

export default withRouter(RouteDetails); 