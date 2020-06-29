import React from "react";
import {Link} from "react-router-dom"; 

export default class WorkoutIndex extends React.Component {
    
    constructor(props) {
        super(props); 
        this.modWorkout = this.modWorkout.bind(this); 
        this.loaded = true; 
        this.renderTableRows = this.renderTableRows.bind(this); 
    }

    componentDidMount (){
        this.props.fetchWorkouts(this.props.user);

    }

    modWorkout(workout){
        let route = this.props.routes[workout.routeId];
        if(route){
            workout.imageUrl = route.imageUrl;
            workout.routeName = route.name; 
            workout.distance = route.distance; 
        } 
        // else{
        //     this.loaded = false;
        //     return; 
        // }
    }

    convertDateTime(date) {
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    }

    convertDistance(dist) {
        return (dist * 0.000621371).toFixed(2)
    }

    renderTableRows() {
        return this.props.workouts.map((workout, i) => {
            return (
                <tr key={i}>
                    <td>
                        <Link className="options-button" to={`/workouts/${workout.id}`}>
                            <img className="route-thumb" src={workout.imageUrl} alt="" />
                        </Link>
                    </td>
                    <td>
                        <span>{workout.activity}</span>
                    </td>
                    <td>
                        <Link className="options-button" to={`/workouts/${workout.id}`}>
                            {this.convertDateTime(workout.startDatetime)}
                        </Link>
                    </td>
                    <td>
                        <Link className="options-button" to={`/workouts/${workout.id}`}>
                            {workout.routeName}
                        </Link>
                    </td>
                    <td>
                        {this.convertDistance(workout.distance)} Miles
                    </td>
                    <td>
                        {workout.duration}
                    </td>




                    <td>
                        {/* <a className="options-button"
                            onClick={this.handleDelete(route.id)}>
                            Delete
                            </a> */}
                    </td>
                </tr>
            )
        });
    }

    render() {
        
        this.props.workouts.forEach(this.modWorkout); 
       
        if (this.loaded){
            return(
                <div className = "workout-index-container">
                    <table className="workout-index" >
                        <thead>
                            <tr >
                                <th></th><th>Sport</th><th>Date</th><th>Route</th><th>Distance</th><th>Duration</th><th>Options</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.renderTableRows()}
                        </tbody>

                    </table>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }

}