///////////////// STORE /////////////////////////////

// exports a configureStore function that sets up store with optional
// preloaded state
// Store takes in rootReducer from /reducers/root_reducer.js and 
// thunk and logger middleware 

////////////// Imports ///////////////////////

import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

/////////////////////// Main ////////////////////

export default function configureStore(preloaded_state){
    return createStore(rootReducer,preloaded_state,applyMiddleware(thunk,logger)); 
}

/////////////////////////////////////////////////////////