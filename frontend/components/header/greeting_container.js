/////////////////// Greeting Container ///////////////////////////
// Passes state to greeting
// Passes logout function as well
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import {connect} from "react-redux";
    
/// Actions
    import {logout} from "../../actions/session_actions";
/// Components 

    import Greeting from "./greeting";

/////////////////////// Main ////////////////////////////////////////////

function mapStatetoProps (state) {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    }
}

function mapDispatchtoProps (dispatch) {
    return {
        logout: ()=> dispatch(logout())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Greeting); 