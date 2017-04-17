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
            type: 'GET_LOGIN_FAILURE',
            payload: {
                flashMessage: error.response.data.error,
                flashMessageClasses: 'danger'
            }
        }
    });

    return {
        type: 'IGNORED',
        payload: data
    }
}

export function getAttemptRegister(email, password) {

}