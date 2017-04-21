const DEFAULT_STATE = {
    id: null,
    token: '',
    display: '',
    avatar: '',
    email: '',
    verified: false,

    isFetching: false,

    loginRegisterModal: {
        isOpen: false,
        email: '',
        login: {
            flashMessages: [],
        },
        register: {
            flashMessages: [],
        }
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
        case 'GET_REGISTER_FAILURE':
            // intentional fallthrough
        case 'SET_REGISTER_MESSAGES':
            console.log(action.payload);
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    register: Object.assign({}, state.loginRegisterModal.register, {
                        flashMessages: action.payload
                    })
                })
            });
        case 'GET_LOGIN_FAILURE':
            // intentional fallthrough
        case 'SET_LOGIN_MESSAGES':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    login: Object.assign({}, state.loginRegisterModal.login, {
                        flashMessages: action.payload
                    })
                })
            });
        case 'GET_FORGOT_PASSWORD_FAILURE':
            return ;
        case 'GET_USER':
            return Object.assign({}, state, action.payload);
        case 'GET_LOGOUT':
            return Object.assign({}, DEFAULT_STATE);
        case 'GET_LOGIN_SUCCESS':
            return Object.assign({}, DEFAULT_STATE, action.payload);
        case 'GET_REGISTER_SUCCESS':
            return Object.assign({}, DEFAULT_STATE, action.payload);
        case 'GET_FORGOT_PASSWORD_SUCCESS':
            return state;

        default:
            return state;
    }
}