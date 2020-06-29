///////////////////// Entites Reducer ///////////////////////////////////
// Sub-reducer to combine all entity reducers
// Inlcludes Users, Routes, Workouts, etc

///////////////////// Imports /////////////////////////////////////////
  /// Utilities
    import {combineReducers} from "redux";
  /// Reducers
    import {usersReducer} from "./users_reducer";
    import routesReducer from "./routes_reducer";
    import workoutsReducer from "./workouts_reducer";
///////////////////// Main ///////////////////////////////////////////

    export default combineReducers({
        users: usersReducer,
        routes: routesReducer,
        workouts: workoutsReducer
    }); 