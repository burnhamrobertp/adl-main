import Axios from 'Axios'

export function setLoginRegisterOpen(data) {
    return {
        type: 'SET_LOGIN_REGISTER_MODAL_OPEN',
        payload: data
    }
}

export function setLoginRegisterEmail(data) {
    return {
        type: 'SET_LOGIN_REGISTER_EMAIL',
        payload: data
    }
}

export function setUserFetching(data) {
    return {
        type: 'SET_USER_FETCHING',
        payload: data
    }
}

export function setMessages(data) {
    return {
        type: 'SET_MESSAGES',
        payload: data
    }
}

export function setActiveComponent(data) {
    return {
        type: 'SET_ACTIVE_COMPONENT',
        payload: data
    }
}


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