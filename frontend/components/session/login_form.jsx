////////////////////// Login Form //////////////////////////////////
// Exports a presentational component that renders a Log In form
// Wrapped by login_container.js 
/* Props:
        errors: - Array of errors from state.errors.session if any 
                    are present 
        action: (user) - action for submitting the form. Expects a pojo
                        with all user attributes 
        clearErrors: () - action for clearing errors on mount
 */
///////////////////// Imports ///////////////////////////////////////
 /// Utilities
    import React from "react";
    import { Link } from "react-router-dom";
 /// Components
    

//////////////////// Main ///////////////////////////////////////////

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        // Before mounting, clear outstanding session errors
        this.props.clearErrors(); 

        // Function Bindings
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDummyUser = this.loginDummyUser.bind(this);
    }

    
    componentDidMount () {
        
        
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

    loginDummyUser(e) {
        e.preventDefault(); 
        this.props.action({
            email:"dummyUser@runmapper.com",
            password:"testdummy"
        }); 
    }

    render() {
        return (
            <div className="session-form-container">
               
                <form className="session-form" onSubmit={this.handleSubmit}>
                    
                    <Link className="session-form-nav" to="/signup"> SIGN UP</Link>
                    
                    <button className="guest-user-button" onClick={this.loginDummyUser}>LOG IN AS GUEST USER </button>
                    
                    <div className = "form-divider">
                        <span className="divider-line"></span>
                        <span className = "or-text">OR</span>
                        <span className="divider-line"></span>
                    </div>

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