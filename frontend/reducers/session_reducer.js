import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/user_session_actions'

const _nullSession = {
    currentUser: null,
};

export const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    // debugger 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user.id };
        case LOGOUT_CURRENT_USER:
            return { currentUser: null };
        default:
            return state;
    }
}