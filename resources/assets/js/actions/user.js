import Axios from 'axios'
import {createAction} from 'redux-actions'

// Login & register modal is open or not
export const setLoginRegisterOpen = createAction('SET_LOGIN_REGISTER_MODAL_OPEN', data => data);
// Populate the e-mail field for the login / register modal
export const setLoginRegisterEmail = createAction('SET_LOGIN_REGISTER_EMAIL', data => data);
// Set the user data into the state
export const setUser = createAction('SET_USER', data => data);
// Logged-in user details being fetched
export const setUserFetching = createAction('SET_USER_FETCHING', data => data);
// Which pane of the login register modal is active
export const setActiveComponent = createAction('SET_ACTIVE_COMPONENT', data => data);
// Set the flash messages and classes for the login register modal
export const setFlashMessages = createAction('SET_MESSAGES', (flashMessages, flashClass) => ({
        messages: flashMessages,
        class: flashClass
    })
);

export function getUser() {
    return (dispatch) => {
        dispatch(setUserFetching(true));
        Axios.get('/user')
            .then(response => {
                dispatch(setUser(response.data));
                dispatch(setUserFetching(false));
            })
            .catch(() => {
                dispatch(setUserFetching(false));
            });
    }
}

export function getLogout() {
    return (dispatch) => {
        Axios.post('/logout')
            .then(() => {
                dispatch({type: 'GET_LOGOUT'});
            });
    }
}

export function getLogin(form) {
    return (dispatch) => {
        Axios.post('/login', form)
            .then(response => {
                dispatch(setUser(response.data));
            })
            .catch(error => {
                dispatch(setFlashMessages(error.response.data, 'danger'));
            });
    }
}

export function getRegister(form) {
    return (dispatch) => {
        Axios.post('/register', form)
            .then(response => {
                dispatch(setUser(response.data));
            })
            .catch(error => {
                dispatch(setFlashMessages([
                    ...error.response.data.email,
                    ...error.response.data.password
                ], 'danger'));
            });
    }
}

export function getForgotPassword(email) {
    return (dispatch) => {
        Axios.post('/password/email', {email: email})
            .then(() => {
                dispatch(setFlashMessages(['Check your e-mail for your password reset.'], 'info'));
            });
    }
}

export function getVerficiationEmail() {
    return (dispatch) => {
        Axios.post('/user/verify')
            .then(() => {
                dispatch(setFlashMessages(['Check your e-mail for your verification code.'], 'info'));
            });
    }
}