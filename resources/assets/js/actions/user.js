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

export const getUser = createAction('GET_USER', () =>
    Axios.get('/user')
);

export const getLogout = createAction('GET_LOGOUT', () =>
    Axios.post('/logout')
);

export const getLogin = createAction('GET_LOGIN_SUCCESS', form =>
    Axios.post('/login', form)
);

export const getRegister = createAction('GET_REGISTER', form =>
    Axios.post('/register', form)
);

export const getForgotPassword = createAction('GET_FORGOT_PASSWORD_SUCCESS', email =>
    Axios.post('/password/email', {
        email: email
    })
);

export const getVerficiationEmail = createAction('IGNORED', () =>
    Axios.post('/user/verify')
);