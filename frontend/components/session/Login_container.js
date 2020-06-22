//////////////////// Login Container /////////////////////////////////

// Wrapper for LoginForm that passes it state and dispatch props

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
/////////////////////// Main ////////////////////////////////////////////

const mapStatetoProps = function (state) {
    return {
        errors: state.errors.session // errors will contain a hash of field names: [errors] if there are any
    }
}

const mapDispatchtoProps = function (dispatch) {
    return {
        action: (user) => dispatch(login(user))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm); 