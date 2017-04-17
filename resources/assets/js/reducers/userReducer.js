const DEFAULT_STATE = {
    id: null,
    email: null,
    display: null,
    loginRegisterModal: {
        isOpen: false,
        email: null,
        flashMessage: null,
        flashMessageClasses: []
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
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    email: action.payload
                })
            });
        case 'GET_LOGIN_SUCCESS':
            return Object.assign({}, state, {

            });
        case 'GET_LOGIN_FAILURE':
            return Object.assign({}, state, {
                loginRegisterModal: Object.assign({}, state.loginRegisterModal, {
                    flashMessage: action.payload.flashMessage,
                    flashMessageClasses: action.payload.flashMessageClasses
                })
            });

        default:
            return state;
    }
}