const DEFAULT_STATE = {
    index: []
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'GET_MODULES':
            return Object.assign({}, state, {
                index: action.payload
            });

        default:
            return state;
    }
}