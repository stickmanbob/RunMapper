import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER,  RECEIVE_USER } from '../actions/user_session_actions';
import { RECEIVE_ROUTE } from "../actions/route_actions";
import { RECEIVE_WORKOUT } from "../actions/workout_actions";
export const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user }) // brackets for interpolation in object key
        case RECEIVE_ROUTE:
            return Object.assign({}, state, { [action.creator.id]: action.creator })
        case RECEIVE_WORKOUT:
            return Object.assign({},state, {[action.user.id]: action.user})
        case RECEIVE_USER:
            return Object.assign({},state,{ [action.user.id]:action.user })
        default:
            return state;
    }

}

