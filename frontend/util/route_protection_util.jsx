///////////// Auth and Protected route wrappers /////////////////
    import {Route, Redirect} from "react-router-dom"; 
    import {connect} from "react-redux"; 
    import React from "react"; 
/// Protected route

  /// container

    function mSTP (state) {
        return {
            logged_in: Boolean(state.session.currentUser) 
        }
    }

    /// component

    function Protected (props) {
        if (props.logged_in) {
            return (
                <Route path={props.path} exact={props.exact} component={props.component}/>
            )
        } else {
            return (
                <Redirect to="/signup" />
            )
        }
    }


    export const ProtectedRoute = connect(mSTP)(Protected); 

/// Auth Route

    /// component

    function Auth (props) {
        if (!props.logged_in) {
            return (
                <Route path={props.path} exact={props.exact} component={props.component} />
            )
        } else {
            return (
                <Redirect to="/my_home/rw_dashboard" />
            )
        }
    }

    export const AuthRoute = connect(mSTP)(Auth); 