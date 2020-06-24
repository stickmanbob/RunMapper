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
    import SignUpFormContainer from './session/signup_container';
    import LoginFormContainer from './session/Login_container';
    import Header from './header/header';

    // Route Creator
    import RouteMap from './routes/route_creator/route_map'
/////////////////////////////////////////


export default function App (){
    return(
        <>
           <Header/>
           
            <Switch>

                <Route exact path="/signup" component={SignUpFormContainer}/>
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/routes/create" component={RouteMap}/>

            </Switch>
        </>
    )
}