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
    SET_USER: (state, action) => action.payload,
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
    SET_MESSAGES: (state, action) => ({
        ...state,
        loginRegisterModal: {
            ...state.loginRegisterModal,
            flashMessages: action.payload.messages,
            flashMessageClass: action.payload.class
        }
    }),
    GET_LOGOUT: (state, action) => DEFAULT_STATE,
}, DEFAULT_STATE);