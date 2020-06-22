////////////////////////////////////////////////////////
/////////////// APP MAIN FILE //////////////////////////
////////////////////////////////////////////////////////

// Exports component that renders every top level component and handles routing
// App component externally wrapped in provider and hash router

/////////////Imports/////////////////////
  /// Utilites 
    import React from 'react';
    import {Route, Switch} from 'react-router-dom'; 
  /// Components
    import SignUpFormContainer from './session/signup_container'
    import LoginFormContainer from './session/Login_container'
/////////////////////////////////////////


export default function App (){
    return(
        <>
            <Switch>

                <Route exact path="/signup" component={SignUpFormContainer}/>
                <Route exact path="/login" component={LoginFormContainer} />

            </Switch>
        </>
    )
}