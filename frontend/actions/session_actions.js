import { postUser, postSession, deleteSession } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"


export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

export const logoutCurrentUser = (user) => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors.responseJSON 
    }
}

export const login = (user) => (dispatch) => {
    postSession(user)
        .then(res => dispatch(receiveCurrentUser(res)))
        .fail(res => dispatch(receiveSessionErrors(res)));
};

export const signup = (user) => (dispatch) => postUser(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(res => dispatch(receiveSessionErrors(res)));

export const logout = () => (dispatch) => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));