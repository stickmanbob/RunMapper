/////////////////// Routes/Workouts Dashboard ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
    import RouteIndex from "../routes/route_index/my_routes_container";
    import WorkoutIndex from "../workouts/workout_index/my_workouts_container";
    import { Link } from "react-router-dom";



/////////////////////// Main ////////////////////////////////////////////

export default class RWDashboard extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="rw-dashboard">
                <h1>MY ROUTES AND WORKOUTS</h1>
                
                <nav className="view-buttons">
                    <Link to="/rw_dashboard/#routes" >ROUTES</Link>
                    <Link to={{ pathname: "my_home/rw_dashboard/#workouts" }} >WORKOUTS</Link>
                </nav>
            </div>
        );
    }
}