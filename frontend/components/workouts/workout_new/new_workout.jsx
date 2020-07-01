/////////////////// New Workout ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class NewWorkout extends React.Component {

    constructor(props){
        super(props);

        this.loaded = false;

        this.state = {
            route_id: "",
            duration: "",
            date: "",
            time: "",
            notes: "",
            activity: "",
            hours: "",
            minutes: "",
            seconds: "" 
        }

        // Function bindings
            this.handleChange = this.handleChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this); 
            this.routeOptions = this.routeOptions.bind(this);
            this.calcDuration = this.calcDuration.bind(this); 
    }

    componentDidMount(){
        this.props.fetchUserRoutes(this.props.currentUser)
        this.loaded = true; 
    }

    handleSubmit(e) {
        e.preventDefault();
        // // build out the route with all our data

        let workout = {
            route_id: this.state.route_id,
            duration: this.state.duration,
            notes: this.state.notes,
            activity: this.state.activity
        };

        workout.start_datetime = this.formatStartDateTime(this.state.date, this.state.time);  

        workout.duration = this.calcDuration(); 

        console.log(workout); 

        // Submit route and pass withRouter history prop
        this.props.createWorkout(workout, this.props.history);
        
    }   

    formatStartDateTime (date, time) {
        return `${date} ${time}`
    }

    handleChange(field) {
        
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    routeOptions() {
        return this.props.routes.map((route,idx)=>{
            return <option key={idx} value={route.id}>
                    {route.name}
                </option>
        })
    }

    calcDuration(){
        let hours = parseInt(this.state.hours) || 0;
        let minutes = parseInt(this.state.minutes) || 0;
        let seconds = parseInt(this.state.seconds) || 0;
        console.log(hours,  minutes, seconds); 
        return (seconds + (minutes*60) + (hours*3600)); 
    }

    render(){

        if(!this.loaded){
            return <div>Loading...</div>
        }

        return(
            <div className="new-workout">

                <header>
                    <h1>LOG A WORKOUT</h1>
                </header>

                <section>
                    <div className="name-date">
                        <div className="input-field workout-name">
                            <h2>Workout name</h2>
                            <input type="text"/>
                        </div>

                        <div className="input-field workout-date">
                            <h2>Date</h2>
                            <input type="date" onChange={this.handleChange("date")}/>
                        </div>
                    </div>


                    <div className="time-duration">
                        <div className="input-field workout-time">
                            <h2>Start time</h2>
                            <input type="time" placeholder="00:00 AM" value={this.state.time} onChange={this.handleChange("time")} />
                        </div>

                        <div className="input-field workout-duration" >
                            <h2>Duration</h2>

                            <input type="number" maxLength="3" placeholder="hh" value={this.state.hours} onChange={this.handleChange("hours")} /> :

                            <input type="number" max="60" placeholder="mm" value={this.state.minutes} onChange={this.handleChange("minutes")} /> :

                            <input type="number" max="60" placeholder="ss" value={this.state.seconds} onChange={this.handleChange("seconds")} />
                        </div>
                    </div>

                    <div className="input-field workout-notes">
                        <h2>How did it go?</h2>
                        <textarea onChange={this.handleChange("notes")} value={this.state.notes} cols="40" rows="5"></textarea>
                    </div>
                </section>

                <div className="input-field workout-activity">
                    <h2>Activity</h2>
                    <select className="workout-dropdown" value={this.state.activity} onChange={this.handleChange("activity")} >
                        <option value="">Choose an Activity</option>
                        <option value="Run">Run</option>
                        <option value="Bike Ride">Bike Ride</option>
                        <option value="Walk">Walk</option>
                        <option value="Hike">Hike</option>
                        <option value="Other">Other Sport/Activity</option>
                    </select>
                </div>

                <div className="input-field workout-route">
                    <h2>Route</h2>
                    <select className="workout-dropdown" value={this.state.route_id} onChange={this.handleChange("route_id")} >
                        <option value="">Select Route</option>
                        {this.routeOptions()}
                    </select>
                </div>

                <hr/>

                <button className="save-workout" onClick={this.handleSubmit}>SAVE</button>
                
            </div>
        )
    }
}