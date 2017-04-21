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

export function setLoginMessages(data) {
    return {
        type: 'SET_LOGIN_MESSAGES',
        payload: data
    }
}

export function setRegisterMessages(data) {
    return {
        type: 'SET_REGISTER_MESSAGES',
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

export function getLogin(email, password) {
    const data = Axios.post('/login', {
        email: email,
        password: password
    }).then((response) => {
        return {
            type: 'GET_LOGIN_SUCCESS',
            payload: response.data
        }
    }).catch((error) => {
        return {
            type: 'SET_LOGIN_MESSAGES',
            payload: [error.response.data.email]
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}

export function getRegister(email, password, passwordc) {
    const data = Axios.post('/register', {
        email: email,
        password: password,
        password_confirmation: passwordc
    }).then((response) => {
        return {
            type: 'GET_REGISTER_SUCCESS',
            payload: response.data
        }
    }).catch((error) => {
        return {
            type: 'GET_REGISTER_FAILURE',
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
            type: 'GET_FORGOT_PASSWORD_FAILURE',
            payload: [error.response.data.email]
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}