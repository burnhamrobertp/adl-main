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
            flashMessage: '',
            flashMessageClass: ''
        },
        register: {
            flashMessage: '',
            flashMessageClass: ''
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
        case 'GET_USER':
            return Object.assign({}, state, action.payload);
        case 'GET_LOGOUT':
            return Object.assign({}, DEFAULT_STATE);
        case 'GET_LOGIN_SUCCESS':
            return Object.assign({}, DEFAULT_STATE, action.payload);
        case 'GET_LOGIN_FAILURE':
            return Object.assign({}, DEFAULT_STATE, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    login: action.payload
                })
            });

        default:
            return state;
    }
}