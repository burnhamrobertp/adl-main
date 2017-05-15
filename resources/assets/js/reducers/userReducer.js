import {handleActions} from 'redux-actions'

const DEFAULT_STATE = {
    id: null,
    token: '',
    display: '',
    avatar: '',
    email: '',
    verified: 0,
    role: [],
    ratings: [],

    isFetching: false,

    loginRegisterModal: {
        isOpen: false,
        activeComponent: '',
        email: '',
        flashMessages: [],
        flashMessageClass: ''
    }
};

export default handleActions({
    SET_LOGIN_REGISTER_MODAL_OPEN: (state, action) => ({
        ...state,
        loginRegisterModal: {
            ...state.loginRegisterModal,
            isOpen: action.payload
        }
    }),
    SET_LOGIN_REGISTER_EMAIL: (state, action) => ({
        ...state,
        loginRegisterModal: {
            ...state.loginRegisterModal,
            email: action.payload
        }
    }),
    SET_USER_FETCHING: (state, action) => ({
        ...state,
        isFetching: action.payload
    }),
    SET_ACTIVE_COMPONENT: (state, action) => ({
        ...state,
        loginRegisterModal: {
            ...state.loginRegisterModal,
            activeComponent: action.payload,
            flashMessages: [],
            flashMessageClass: ''
        }
    }),
    GET_USER: (state, action) => (action.payload.data),
    GET_LOGIN: (state, action) => {
        if (!action.error)
            return action.payload.data;

        return {
            ...state,
            loginRegisterModal: {
                ...state.loginRegisterModal,
                flashMessages: action.payload.response.data,
                flashMessageClass: 'danger'
            }
        }
    },
    GET_REGISTER: (state, action) => {
        if (!action.error)
            return action.payload.data;

        return {
            ...state,
            loginRegisterModal: {
                ...state.loginRegisterModal,
                flashMessages: [...action.payload.response.data.email || [], ...action.payload.response.data.password || []],
                flashMessageClass: 'danger'
            }
        }
    },
    GET_LOGOUT: (state, action) => DEFAULT_STATE,
    GET_FORGOT_PASSWORD: (state, action) => ({
        ...state,
        loginRegisterModal: {
            ...state.loginRegisterModal,
            flashMessages: ['Check your e-mail for your password reset.'],
            flashMessageClass: 'info'
        }
    })
}, DEFAULT_STATE);