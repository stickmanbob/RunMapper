/////////////////// New Workout ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
    import ErrorMessage from "../../error_message";



/////////////////////// Main ////////////////////////////////////////////

export default class NewWorkout extends React.Component {

    constructor(props){
        super(props);

        this.loaded = false;
        this.state = {
            route_id: this.props.location.route ? this.props.location.route.id : "",
            name:"",
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

    componentWillUnmount(){
        this.props.clearWorkoutErrors(); 
    }

    handleSubmit(e) {
        e.preventDefault();
        // // build out the route with all our data

        let workout = {
            route_id: this.state.route_id,
            duration: this.state.duration,
            notes: this.state.notes,
            activity: this.state.activity,
            name: this.state.name,
        };

        workout.start_datetime = this.formatStartDateTime(this.state.date, this.state.time);  

        workout.duration = this.calcDuration(); 
 
        
        // Submit route and pass withRouter history prop

        if (!this.props.hideButtons) {
            this.props.toggleButtons();
            this.props.createWorkout(workout, this.props.history)
                .then(() => this.props.toggleButtons())
                .fail(() => this.props.toggleButtons());
        }
        
    }   

    formatStartDateTime (date, time) {
        return `${date} ${time}`
    }

    handleChange(field) {
        
        return (e) => {
            e.preventDefault(); 
            this.setState({
                [field]: e.target.value
            })
        }
    }

    routeOptions() {
        return this.props.routes.map((route,idx)=>{
            return <option key={idx} value={route.id}>
                    {route.name}
                </option>
        })
    }

    calcDuration(){

        if(!this.state.hours && !this.state.minutes && !this.state.seconds){
            return null; 
        }

        let hours = parseInt(this.state.hours) || 0;
        let minutes = parseInt(this.state.minutes) || 0;
        let seconds = parseInt(this.state.seconds) || 0;
        return (seconds + (minutes*60) + (hours*3600)); 
    }

    render(){
        
        if(!this.loaded){
            return <div>Loading...</div>
        }

        let submitText = this.props.hideButtons ? "" : "Submit Changes";
        let disableSubmit = this.props.hideButtons ? "disabled" : ""

        return(
            <div className="new-workout">

                <header>
                    <h1>LOG A WORKOUT</h1>
                </header>

                <section>
                    <div className="name-date">
                        <div className="input-field workout-name">
                            <h2>Workout name  <ErrorMessage errors={this.props.errors} field={"name"} /></h2>
                            <input type="text" value={this.state.name} onChange={this.handleChange("name")}/>
                           
                        </div>

                        <div className="input-field workout-date">
                            <h2>Date <ErrorMessage errors={this.props.errors} field={"start_datetime"} /></h2>
                            <input type="date" onChange={this.handleChange("date")}/>
                            
                        </div>
                    </div>


                    <div className="time-duration">
                        <div className="input-field workout-time">
                            <h2>Start time <ErrorMessage errors={this.props.errors} field={"start_datetime"} /></h2>
                            <input type="time" placeholder="00:00 AM" value={this.state.time} onChange={this.handleChange("time")} />
                            
                        </div>

                        <div className="input-field workout-duration" >
                            <h2>Duration <ErrorMessage errors={this.props.errors} field={"duration"} /></h2>
                            
                            <input type="number" min="0" maxLength="3" placeholder="hh" value={this.state.hours} onChange={this.handleChange("hours")} /> :

                            <input type="number" min="0" max="60" placeholder="mm" value={this.state.minutes} onChange={this.handleChange("minutes")} /> :

                            <input type="number" min="0" max="60" placeholder="ss" value={this.state.seconds} onChange={this.handleChange("seconds")} />
                        </div>

                    </div>

                    <div className="input-field workout-notes">
                        <h2>How did it go?</h2>
                        <textarea onChange={this.handleChange("notes")} value={this.state.notes} cols="40" rows="5"></textarea>
                    </div>
                </section>

                <div className="input-field workout-activity">
                    <h2>Activity  <ErrorMessage errors={this.props.errors} field={"activity"} /></h2>
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
                    <h2>Route  <ErrorMessage errors={this.props.errors} field={"route_id"} /></h2>
                    <select className="workout-dropdown" value={this.state.route_id} onChange={this.handleChange("route_id")} >
                        <option value="">Select Route</option>
                        {this.routeOptions()}
                    </select>
                </div>

                <hr/>

                <button className="save-workout ${disableSubmit}" onClick={this.handleSubmit}>
                    <img className={`button-spinner ${disableSubmit}`} src={window.loadingSpinner} />
                    {submitText}
                </button>
                
            </div>
        )
    }
}