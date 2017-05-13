import Axios from 'Axios'
import { createAction } from 'redux-actions'

// Login & register modal is open or not
export const setLoginRegisterOpen = createAction('SET_LOGIN_REGISTER_MODAL_OPEN', data => data);
// Populate the e-mail field for the login / register modal
export const setLoginRegisterEmail = createAction('SET_LOGIN_REGISTER_EMAIL', data => data);
// Logged-in user details being fetched
export const setUserFetching = createAction('SET_USER_FETCHING', data => data);
// Set the user flash messages
export const setMessages = createAction('SET_MESSAGES', data => data);
// Which pane of the login register modal is active
export const setActiveComponent = createAction('SET_ACTIVE_COMPONENT', data => data);

export function getUser() {
    const data = Axios.get('/user')
        .then((response) => response.data);

    return {
        type: 'GET_USER',
        payload: data
    }
}

export function getLogout() {
    const data = Axios.post('/logout');

    return {
        type: 'GET_LOGOUT',
        payload: data
    }
}

export function getLogin(form) {
    const data = Axios.post('/login',
        form
    ).then((response) => {
        return {
            type: 'GET_LOGIN_SUCCESS',
            payload: response.data
        }
    }).catch((error) => {
        return {
            type: 'SET_MESSAGES',
            payload: [error.response.data.email]
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}

export function getRegister(form) {
    const data = Axios.post('/register',
        form
    ).then((response) => {
        return {
            type: 'GET_REGISTER_SUCCESS',
            payload: response.data
        }
    }).catch((error) => {
        return {
            type: 'SET_MESSAGES',
            payload: [...error.response.data.email || [], ...error.response.data.password || []]
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}

export function getForgotPassword(email) {
    const data = Axios.post('/password/email', {
        email: email
    }).then((response) => {
        return {
            type: 'GET_FORGOT_PASSWORD_SUCCESS',
            payload: response.data
        }
    }).catch((error) => {
        return {
            type: 'SET_MESSAGES',
            payload: [error.response.data.email]
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}

export function getVerficiationEmail() {
    const data = Axios.post('/user/verify')
        .then((response) => {
            return {}
        }).catch((error) => {
            return {}
        });

    return {
        type: '',
        payload: data
    }
}