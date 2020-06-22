///////////////////// Entites Reducer ///////////////////////////////////
// Sub-reducer to combine all entity reducers
// Inlcludes Users, Routes, Workouts, etc

///////////////////// Imports /////////////////////////////////////////
  /// Utilities
    import {combineReducers} from "redux";
  /// Reducers
    import {usersReducer} from "./users_reducer";

///////////////////// Main ///////////////////////////////////////////

    export default combineReducers({
        users: usersReducer
    }); 