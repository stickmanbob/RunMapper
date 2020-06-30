/////////////////// Workout Show ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
import workout_show_container from "./workout_show_container";
/// Components




/////////////////////// Main ////////////////////////////////////////////

export default class ShowWorkout extends React.Component {

    constructor (props) {
        super(props);

      /// State has not yet loaded
        this.loaded = false;

      /// Function bindings

    };


    componentDidMount(){

        // Bootstrap the route and workout 
        this.props.fetchWorkout(this.props.match.params.workoutId);
        this.loaded = true;
    }

    render () {

        if (!this.loaded){
            return (<div>Loading...</div>);
        }

        let workout = this.props.workout;
        let route = this.props.routes[workout.routeId]; 
        let user = this.props.users[workout.userId];

        return(
            <div className="show-workout">
                <section classname="workout-info-box">
                    
                    <header>
                        <h1>
                            {user.fname} {user.lname} - {workout.activity}
                        </h1>
                    </header>

                    <div className="workout-info-body">
                        <div>
                            <h3>{workout.startDatetime}</h3>
                            <h1>{route.name}</h1>
                            <p>{workout.notes}</p>
                        </div>

                        <div className="workout-metrics">
                            <div className="workout-metric">
                                <h2>
                                    {route.distance}
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
                                    Pace
                                    <abbr title="minutes per mile">/mi</abbr>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="workout-map">

                </section>
            </div>
        )
    }
}