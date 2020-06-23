////////////////////// Sign Up Form //////////////////////////////////
// Exports a presentational component that renders a sign up form
// Wrapped by signup_container.js 
/* Props:
        errors: [] - Hash of fieldname:[errors] from state.errors.session if any
                    are present
        action: (user) - action for submitting the form. Expects a pojo
                        with all user attributes 
        clearErrors: () - action for clearing errors on mount

        login: (user) - action for logging in user (for user with dummy user button)
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
        this.loginDummyUser = this.loginDummyUser.bind(this);
    }

    // After mounting, clear outstanding session errors
    componentDidMount() {
        this.props.clearErrors(); 
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

    loginDummyUser(e) {
        e.preventDefault(); 
        this.props.login({
            email: "dummyUser@runmapper.com",
            password: "testdummy"
    }); 
    }

    render() {
        return (
            <div className="session-form-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <Link className="session-form-nav" to="/login"> LOG IN</Link>

                    <button className="guest-user-button" onClick={this.loginDummyUser}>SIGN UP AS GUEST USER </button>

                    <div className="form-divider">
                        <span className="divider-line"></span>
                        <span className="or-text">OR</span>
                        <span className="divider-line"></span>
                    </div>

                    <input className="session-form-input" type="text" placeholder="First Name" onChange={this.handleChange("fname")}/>
                    <ErrorMessage errors={this.props.errors} field="fname" />

                    <input className="session-form-input" type="text" placeholder="Last Name" onChange={this.handleChange("lname")} />
                    <ErrorMessage errors={this.props.errors} field="lname" />

                    <input className="session-form-input" type="text" placeholder="Email" onChange={this.handleChange("email")} />
                    <ErrorMessage errors={this.props.errors} field="email" />

                    <input className="session-form-input" type="password" placeholder="Password" onChange={this.handleChange("password")} />
                    <ErrorMessage errors={this.props.errors} field="password" />

                    <input className='submit' type="submit" value="Sign Up"/>
                   
                </form>
            </div>
        )
    }
}