//////////////////// Login Container /////////////////////////////////

// Wrapper for LoginForm that passes it state and dispatch props

//////////////////// Imports ////////////////////////////////////////////

import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
/////////////////////// Main ////////////////////////////////////////////

mapStatetoProps = function (state) {
    return {
        errors: state.errors.session
    }
}

mapDispatchtoProps = function (dispatch) {
    return {
        action: (user) => dispatch(login(user))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm); 