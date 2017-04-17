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

export function setLoginRegisterPassword(data) {
    return {
        type: 'SET_LOGIN_REGISTER_PASSWORD',
        payload: data
    }
}

export function getAttemptLogin(email, password) {
    return Axios.post('/login', {
        email: email,
        password: password
    }).then((response) => {
        console.log('success', response);
        return {
            type: 'GET_LOGIN_SUCCESS',
            payload: ''
        }
    }).catch((error) => {
        switch(error.response.status) {
            case '422':
                return {
                    type: 'GET_LOGIN_FALIURE',
                    payload: { flashMessage: error.response.data.email, flashMessageClasses: []}
                }

            default:
                return {
                    type: 'GET_LOGIN_FAILURE',
                    payload: ''
                }
        }
    });
}