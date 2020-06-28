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
            description: "",
            activity: ""
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
            <div className="route-details">
                <header className="sidebar-divider">
                    <h3>Route Details</h3>
                </header>

                <form className="detail-form" onSubmit = {this.handleSubmit}>

                    {/* Name Field */}
                    <input className="name-input" onChange={this.handleChange("name")} 
                            type="text" placeholder="Name this Map" 
                            value={this.state.name}/>

                    {/* Activity Dropdown */}
                    <select className="activity-dropdown" value={this.state.activity} onChange={this.handleChange("activity")} >
                        <option value="">Choose an Activity</option>
                        <option value="Run">Run</option>
                        <option value="Bike Ride">Bike Ride</option>
                        <option value="Walk">Walk</option>
                        <option value="Hike">Hike</option>
                        <option value="Other">Other Sport/Activity</option>
                    </select>

                    {/* Submit button */}
                    <input className="submit-route" type="submit" value="Save Route"/>

                    <textarea onChange={this.handleChange("description")} placeholder="Describe this Map" cols="30" rows="10"></textarea>

                </form>
            </div>
        )
    }
}

export default withRouter(RouteDetails); 