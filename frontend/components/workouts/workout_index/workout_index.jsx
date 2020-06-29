import React from "react";

export default class WorkoutIndex extends React.Component {
    
    constructor(props) {
        super(props); 
        this.modWorkout = this.modWorkout.bind(this); 
    }

    componentDidMount (){
        // this.props.fetchWorkouts(this.props.user);

    }

    modWorkout(workout){
        debugger 
        let route = this.props.routes[workout.routeId];
        console.log(route)
        if(route){
            console.log("SUCCESS!")
        }
    }

    render() {
        
        this.props.workouts.forEach(this.modWorkout)
       
        return(
            <div>
                
            </div>
        )
    }

}