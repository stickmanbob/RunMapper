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
    import ErrorMessage from "../../error_message";



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
        if (!this.props.hideButtons) {
            this.props.toggleButtons();
            this.props.createRoute(route, this.props.history)
                .then(() => this.props.toggleButtons())
                .fail(() => this.props.toggleButtons());
        } 
     
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value 
        })
    }


    render() {
        let submitText = this.props.hideButtons ? "" : "Save Route";
        let disableSubmit = this.props.hideButtons ? "disabled" : ""
        return(
            <div className="route-details">
                <header className="sidebar-divider">
                    <h3>Route Details</h3>
                </header>

                <form className="detail-form" >

                    {/* Name Field */}
                    <input className="name-input" onChange={this.handleChange("name")} 
                            type="text" placeholder="Name this Map" 
                            value={this.state.name}/>
                        <ErrorMessage className="error-message" errors={this.props.errors} field="name"/>
                    {/* Activity Dropdown */}
                    <select className="activity-dropdown" value={this.state.activity} onChange={this.handleChange("activity")} >
                        <option value="">Choose an Activity</option>
                        <option value="Run">Run</option>
                        <option value="Bike Ride">Bike Ride</option>
                        <option value="Walk">Walk</option>
                        <option value="Hike">Hike</option>
                        <option value="Other">Other Sport/Activity</option>
                    </select>
                        <ErrorMessage className="error-message" errors={this.props.errors} field="activity" />

                    {/* Submit button */}
                    <div className="submit-container">
                        <button className={`submit-route ${disableSubmit}`} onClick={this.handleSubmit}>
                            <img className={`button-spinner ${disableSubmit}`} src={window.loadingSpinner} />
                            {submitText}
                        </button>
                        {this.props.errors["route_data"] && <span className="error-message"> Route must have at least 2 points</span>}
                    </div>

                    <textarea onChange={this.handleChange("description")} placeholder="Describe this Map" cols="30" rows="10"></textarea>

                </form>
            </div>
        )
    }
}

export default withRouter(RouteDetails); 