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
        if(this.props.workout.activity = "Bike Ride"){
            return <abbr title="miles per hour">mph</abbr>
        } else{
            return <abbr title="minutes per mile">/mi</abbr>
        }
    }
    render () {

        if (!this.loaded){
            return (<div>Loading...</div>);
        }

        let workout = this.props.workout;
        let route = this.props.routes[workout.routeId]; 
        let user = this.props.users[workout.userId];
        let distance = Unit.convertDistance(route.distance).toFixed(2);
        let pace = Unit.convertPace(route.distance, workout.duration, workout.activity);
        return(
            <div className="show-workout">
                <section className="workout-info-box">
                    
                    <header>
                        <h1>
                            {user.fname} {user.lname} - {workout.activity}
                        </h1>
                    </header>

                    <div className="workout-info-body">
                        <div>
                            <h3> {Unit.convertDateTime(workout.startDatetime)}</h3>
                            <h1>{route.name}</h1>
                            <p>{workout.notes}</p>
                        </div>

                        <div className="workout-metrics">
                            <div className="workout-metric">
                                <h2>
                                    {distance}
                                    <abbr title="miles">mi</abbr>
                                </h2>
                            </div>

                            <div className="workout-metric">
                                <h2>
                                    {route.duration}
                                </h2>
                            </div>

                            <div className="workout-metric">
                                <h2>
                                    {pace}
                                    {this.paceUnit()}
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="workout-map">
                    <WorkoutMap route={route}/> 
                </section>
            </div>
        )
    }
}