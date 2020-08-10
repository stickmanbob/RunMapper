/////////////////// UI Reducer ///////////////////////////
// Controls modals and submit buttons
// 
// 

/////////////////// Imports /////////////////////////////////////////

import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import buttonsReducer from './buttons_reducer';


/////////////////////// Main ////////////////////////////////////////////




export default combineReducers({
    modal: modalReducer,
    buttons: buttonsReducer
});