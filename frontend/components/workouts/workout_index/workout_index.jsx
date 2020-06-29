import React from "react";

export default class WorkoutIndex extends React.Component {
    
    constructor(props) {
        super(props); 
        this.modWorkout = this.modWorkout.bind(this); 
    }

    componentDidMount (){
        this.props.fetchWorkouts(this.props.user);

    }

    modWorkout(workout){
        let route = this.props.routes[workout.route_id];
        console.log(route)
        if(route){
            console.log("SUCCESS!")
        }
    }

    render() {
        
        this.props.workouts.forEach(this.modWorkout)
        return(
            <div>
                test
            </div>
        )
    }

}