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

export default function (state = DEFAULT_STATE, action) {
    // check for a nested payload as a result of promise (but no thunk middleware)
    if (action.payload && action.payload.type) {
        action.type = action.payload.type;
        action.payload = action.payload.payload
    }

    switch (action.type) {
        case 'SET_LOGIN_REGISTER_MODAL_OPEN':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    isOpen: action.payload
                })
            });
        case 'SET_LOGIN_REGISTER_EMAIL':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    email: action.payload
                })
            });
        case 'SET_USER_FETCHING':
            return Object.assign({}, state, {
                isFetching: action.payload
            });
        case 'SET_ACTIVE_COMPONENT':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    activeComponent: action.payload,
                    flashMessages: [],
                    flashMessageClass: ''
                })
            });
        case 'SET_MESSAGES':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    flashMessages: action.payload,
                    flashMessageClass: 'danger'
                })
            });
        case 'GET_USER':
            return Object.assign({}, state, action.payload.data);
        case 'GET_LOGOUT':
            location.reload();
            return state;
            break;
        case 'GET_LOGIN':
            return Object.assign({}, DEFAULT_STATE, action.payload.data);
        case 'GET_REGISTER':
            return Object.assign({}, DEFAULT_STATE, action.payload.data);
        case 'GET_FORGOT_PASSWORD':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    flashMessages: ['Check your e-mail for your password reset.'],
                    flashMessageClass: 'info'
                })
            });

        default:
            return state;
    }
}