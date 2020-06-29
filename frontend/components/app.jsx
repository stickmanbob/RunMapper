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
    import {AuthRoute,ProtectedRoute} from "../util/route_protection_util.jsx";
    import SignUpFormContainer from './session/signup_container';
    import LoginFormContainer from './session/Login_container';
    import Header from './header/header';

    // MyRoutes
    import MyRoutes from './routes/route_index/my_routes';
    // Route Creator
    import RouteCreator from './routes/route_creator/route_creator';
    //Show Route
    import ShowRoute from "./routes/route_show/route_show_container"; 

    // My Workouts
    import WorkoutIndex from "./workouts/workout_index/workout_index_container";
/////////////////////////////////////////


export default function App (){
    return(
        <>
           <Header/>
           
            <Switch>

                <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/routes/create" component={RouteCreator}/>
                <ProtectedRoute path="/routes/my_routes" component={MyRoutes}/>
                <ProtectedRoute path="/routes/:routeId" component={ShowRoute}/>
                {/* <ProtectedRoute path="/workouts/my_workouts" component={WorkoutIndex}/> */}

            </Switch>
        </>
    )
}