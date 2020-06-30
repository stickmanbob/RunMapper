import React from "react";
import {Link} from "react-router-dom"; 

export default class WorkoutIndex extends React.Component {
    
    constructor(props) {
        super(props); 
        
      /// Conditional rendering on asset fetching
        this.loaded = false; 

      /// Function Bindings
        this.modWorkout = this.modWorkout.bind(this); 
        this.renderTableRows = this.renderTableRows.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
    }

    componentDidMount (){
        this.props.fetchWorkouts(this.props.user);

      /// Alert component that assets are loaded
        this.loaded = true; 
    }

    modWorkout(workout){
        let route = this.props.routes[workout.routeId];
        if(route){
            workout.imageUrl = route.imageUrl;
            workout.routeName = route.name; 
            workout.distance = route.distance; 
        } 
    }

    handleDelete(id) {
        return (e) => {
            e.preventDefault();
            this.props.deleteWorkout(id);
        }
    }

    convertDateTime(date) {
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    }

    convertDistance(dist) {
        return (dist * 0.000621371).toFixed(2)
    }

    convertDuration(dur){
       return new Date(dur * 1000).toISOString().substr(11, 8)
    }

    renderTableRows() {
        return this.props.workouts.map((workout, i) => {
            return (
                <tr key={i}>
                    <td className="image-col">
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
                        {this.convertDuration(workout.duration)}
                    </td>




                    <td>
                        <a className="options-button"
                            onClick={this.handleDelete(workout.id)}>
                            Delete
                            </a>
                    </td>
                </tr>
            )
        });
    }

    render() {
        
        this.props.workouts.forEach(this.modWorkout); 
       
        if (!this.loaded){
            return (<div>Loading...</div>)
        }
            return(
                <div className = "workout-index-container">
                    <table className="route-index" >
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
        
    }

}