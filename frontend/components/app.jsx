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

    //Header
    import Header from './header/header';

    //Footer
    import Footer from "./Footer/footer";

    // Splash page
    import Splash from "./splash/splash";

    //Route/Workout Dashboard
    import RWDashboard from "./dashboard/rw_dashboard";

    // MyRoutes
    import MyRoutes from './routes/route_index/my_routes_container';
    // Route Creator
    import RouteCreator from './routes/route_creator/route_creator';
    //Show Route
    import ShowRoute from "./routes/route_show/route_show_container"; 

    // My Workouts
    import WorkoutIndex from "./workouts/workout_index/my_workouts_container";

    // Workouts Show
    import ShowWorkout from "./workouts/workout_show/workout_show_container";
    
    // Workout New
    import NewWorkout from "./workouts/workout_new/new_workout_container";

    //User settings
    import UserSettings from "./user_settings/user_settings";
/////////////////////////////////////////


export default function App (){
    let EmptyFooter = () => <></> ;
    return(
        < >
           <Header/>
           
          <div className="main-component">
            <Switch>
               
                <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/my_home/account_settings" component={UserSettings} />
                <ProtectedRoute path="/my_home/rw_dashboard" component={RWDashboard}/>
                <ProtectedRoute exact path="/routes/create" component={RouteCreator}/>
                <ProtectedRoute path="/routes/my_routes" component={RWDashboard}/>
                <ProtectedRoute path="/routes/:routeId" component={ShowRoute}/>
                <ProtectedRoute path="/workouts/my_workouts" component={RWDashboard}/>
                <ProtectedRoute exact path="/workouts/new" component={NewWorkout} />
                <ProtectedRoute path="/workouts/:workoutId" component={ShowWorkout}/>; 
                
                <AuthRoute path="/" component={Splash} />

            </Switch>
          </div>


          <Switch>
            <Route path="/routes/create" component={EmptyFooter}/>
            <Route path="/" component={Footer}/>
          </Switch>
          
        </>
    )
}