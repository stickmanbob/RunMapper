//////////////////// Errors Reducer /////////////////////////////
// Master reducer for all errors.
// Delegates to sub-reducers that focus on smaller errors

//////////////////// Imports ///////////////////////////////////

  /// Utilities
    import {combineReducers} from "redux";
  /// Reducers
    import sessionErrorsReducer from "./session_errors_reducer";
    import routesErrorsReducer from "./routes_errors_reducer"
/////////////////// Main //////////////////////////////////////

export default combineReducers({
    session: sessionErrorsReducer,
    routes: routesErrorsReducer
});

