////////////////////// Login Form //////////////////////////////////
// Exports a presentational component that renders a Log In form
// Wrapped by login_container.js 
/* Props:
        errors: - Array of errors from state.errors.session if any 
                    are present 
        action: (user) - action for submitting the form. Expects a pojo
                        with all user attributes 
 */
///////////////////// Imports ///////////////////////////////////////
 /// Utilities
    import React from "react";
    import { Link } from "react-router-dom";
 /// Components
    import ErrorMessage from "./session_error_message"

//////////////////// Main ///////////////////////////////////////////

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(field): field is a name of a key in this.state (string).
    // handleChange will return an event handler function for the associated 
    // input field that will update the state with the value of the field.
    // State ultimately gets passed as an argument to handleSubmit()

    handleChange(field) {
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
               
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <Link className="session-form-nav" to="/signup"> Sign Up</Link>
                    {/* Render Errors if there are any */}
                    <span className="error-message">{Object.values(this.props.errors)}</span> 
                    
                    {/* Login Form */}
                    <input className="session-form-input" type="text" placeholder="Email" onChange={this.handleChange("email")} />

                    <input className="session-form-input" type="password" placeholder="Password" onChange={this.handleChange("password")} />
                    
                    

                    <input className='submit' type="submit" value="Log In" />

                </form>
            </div>
        )
    }
}