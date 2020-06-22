////////////////////// Sign Up Form //////////////////////////////////
// Exports a presentational component that renders a sign up form
// Wrapped by signup_container.js 
/* Props:
        errors: [] - Hash of fieldname:[errors] from state.errors.session if any
                    are present
        action: (user) - action for submitting the form. Expects a pojo
                        with all user attributes 
 */
///////////////////// Imports ///////////////////////////////////////

  /// Utilities
    import React from "react";
    import {Link} from "react-router-dom";
  /// Components
    import ErrorMessage from "./session_error_message"; 
//////////////////// Main ///////////////////////////////////////////

export default class SignUpForm extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            email:"",
            fname: "",
            lname: "",
            password:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    // handleChange(field): field is a name of a key in this.state (string).
    // handleChange will return an event handler function for the associated 
    // input field that will update the state with the value of the field.
    // State ultimately gets passed as an argument to handleSubmit()

    handleChange(field){ 
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit() { //=> dispatches the signup action with current state as argument
        this.props.action(this.state);
    }

    render() {
        return (
            <div className="session-form-container">
                <Link to="/login"> Log In</Link>
                <form className="session-form" onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="First Name" onChange={this.handleChange("fname")}/>
                    <ErrorMessage errors={this.props.errors} field="fname" />

                    <input type="text" placeholder="Last Name" onChange={this.handleChange("lname")} />
                    <ErrorMessage errors={this.props.errors} field="lname" />

                    <input type="text" placeholder="Email" onChange={this.handleChange("email")} />
                    <ErrorMessage errors={this.props.errors} field="email" />

                    <input type="password" placeholder="Password" onChange={this.handleChange("password")} />
                    <ErrorMessage errors={this.props.errors} field="password" />

                    <input type="submit" value="Sign Up"/>
                   
                </form>
            </div>
        )
    }
}