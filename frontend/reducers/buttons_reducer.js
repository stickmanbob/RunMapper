/////////////////// Buttons Reducer ///////////////////////////
// 
// State on whether or not to disable form submit buttons
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities

/// Action Constants
import { TOGGLE_BUTTONS } from "../actions/button_actions";


/////////////////////// Main ////////////////////////////////////////////

export default function buttonsReducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case TOGGLE_BUTTONS:
            let buttonState = !state.hideButtons;
            return {
                hideButtons: buttonState
            };
        default:
            return state;
    }

}