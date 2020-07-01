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
    import { NavLink } from "react-router-dom";



/////////////////////// Main ////////////////////////////////////////////

export default class RWDashboard extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        var mainComponent;
        if (this.props.location.pathname === "/my_home/rw_dashboard/workouts"){
            mainComponent = <WorkoutIndex/>
        }else{
            mainComponent = <RouteIndex/>
        }
        return(
            <div className="rw-dashboard">
                <h1>MY ROUTES AND WORKOUTS</h1>
                
                <nav className="view-buttons">
                    <ul>
                        <NavLink to="/my_home/rw_dashboard" exact>ROUTES</NavLink>
                        <NavLink to="/my_home/rw_dashboard/workouts" >WORKOUTS</NavLink>
                    </ul>
                </nav>

                {mainComponent}

            </div>
        );
    }
}