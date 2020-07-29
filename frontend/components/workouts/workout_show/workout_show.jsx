/////////////////// Workout Show ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
    import * as Unit from "../../../util/unit_util"; 
/// Components
    import WorkoutMap from "./workout_map";
    import {Link} from "react-router-dom"; 

/////////////////////// Main ////////////////////////////////////////////

export default class ShowWorkout extends React.Component {

    constructor (props) {
        super(props);

      /// State has not yet loaded
        this.loaded = false;

      /// Function bindings
        this.paceUnit = this.paceUnit.bind(this); 
    };


    componentDidMount(){

        // Bootstrap the route and workout 
        this.props.fetchWorkout(this.props.match.params.workoutId);
        this.loaded = true;
    }

    paceUnit(){
     
        if(this.props.workout.activity === "Bike Ride"){
            return <abbr title="miles per hour">mph</abbr>
        } else{
            return <abbr title="minutes per mile">min/mi</abbr>
        }
    }
    render () {

        if (!this.loaded){
            return (<div className="loading">Loading...</div>);
        }

        let workout = this.props.workout;
        let route = this.props.routes[workout.routeId]; 
        let user = this.props.users[workout.userId];
        let distance = Unit.convertDistance(route.distance).toFixed(2);
        let pace = Unit.convertPace(route.distance, workout.duration, workout.activity);
        let duration = Unit.convertDuration(workout.duration);

        let viewRoute;
        
        if (route.creatorId){
            viewRoute = <Link to={`/routes/${route.id}`} className="view-route-link">View Route: {route.name}</Link>;
        } else{
            viewRoute = <span className="view-route-link">Route not availible</span>;
        } 
        
        return(
            <div className="show-workout">
                <section className="workout-info-box">
                    
                    <header>
                        <h1>
                            {user.fname} {user.lname} - {workout.activity}
                        </h1>
                    </header>

                    <div className="workout-info-body">
                        <div className="workout-info">
                            <h3> At {Unit.convertDatetime(workout.startDatetime)}</h3>
                            <h1>{workout.name || route.name} 
                                {viewRoute}
                            </h1>
                            <p>{workout.notes}</p>
                        </div>

                        <div className="workout-metrics">
                            <div className="workout-metric">
                                <h2>
                                    {distance}<abbr title="miles">mi</abbr>
                                </h2>
                                
                                <h3>Distance</h3>
                            </div>

                            <div className="workout-metric">
                                <h2>
                                    {duration}
                                </h2>

                                <h3>Duration</h3>
                            </div>

                            <div className="workout-metric">
                                <h2>
                                    {pace}{this.paceUnit()}
                                </h2>

                                <h3>Average Pace</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="workout-map-container">
                    <WorkoutMap route={route}/> 
                </section>
                
            </div>
        )
    }
}