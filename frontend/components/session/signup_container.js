//////////////////// Signup Container /////////////////////////////////

// Wrapper for SignUpForm that passes it the proper dispatch and state as props

//////////////////// Imports ////////////////////////////////////////////

import {connect} from 'react-redux';
import SignUpForm from './signup_form';
import {signup} from '../../actions/session_actions';
/////////////////////// Main ////////////////////////////////////////////

 const mapStatetoProps = function (state) {
    return {
        errors: state.errors.session // errors will contain a hash of field names: [errors] if there are any
    }
}

const mapDispatchtoProps = function(dispatch) {
    return {
        action: (user) => dispatch(signup(user))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SignUpForm); 

