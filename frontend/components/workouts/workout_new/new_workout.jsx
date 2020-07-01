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
        this.state = {
            route_id: "",
            duration: "",
            date: "",
            time: "",
            notes: "",
            activity: "",
        }

        // Function bindings
            this.handleChange = this.handleChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this); 
            this.routeOptions = this.routeOptions.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserRoutes(this.props.currentUser)
    }

    handleSubmit(e) {
        e.preventDefault();
        // // build out the route with all our data
        // let workout = Object.assign({}, this.state);

        // // Submit route and pass withRouter history prop
        // this.props.createWorkout(workout, this.props.history);
        console.log(this.state); 
    }   

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    routeOptions() {
        return this.props.routes.map((route)=>{
            return <option value={route.id}>
                    {route.name}
                </option>
        })
    }

    render(){

        return(
            <div className="new-workout">

                <header>
                    <h1>LOG A WORKOUT</h1>
                </header>

                <section>
                    <div className="name-date">
                        <div className="input-field">
                            <h2>Workout name</h2>
                            <input type="text"/>
                        </div>

                        <div className="input-field">
                            <h2>Date</h2>
                            <input type="date" onChange={this.handleChange("date")}/>
                        </div>
                    </div>

                    <div className="input-field">
                        <h2>Start time</h2>
                        <input type="time" value={this.state.time} onChange={this.handleChange("time")} />
                    </div>

                    <div className="input-field">
                        <h2>How did it go?</h2>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </section>

                <div className="input-field">
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

                <select className="workout-dropdown" value={this.state.route_id} onChange={this.handleChange("route_id")} >
                   {this.routeOptions()} 
                </select>

                <hr/>

                <button onClick={this.handleSubmit}>SAVE</button>
                
            </div>
        )
    }
}