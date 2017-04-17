const DEFAULT_STATE = {
    id: null,
    email: null,
    display: null,
    loginRegisterModal: {
        isOpen: false,
        email: null
    }
};

export default function (state = DEFAULT_STATE, action) {
    switch(action.type) {
        case 'SET_LOGIN_REGISTER_MODAL_OPEN':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    isOpen: action.payload
                })
            });
        case 'SET_LOGIN_REGISTER_EMAIL':
            return Object.assign({}, state, {

            });
        case 'SET_LOGIN_REGISTER_PASSWORD':
            return Object.assign({}, state, {

            });

        default:
            return state;
    }
}