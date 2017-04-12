const DEFAULT_STATE = {
    index: [],
    moduleHistory: []
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'GET_MODULES':
            return Object.assign({}, state, {
                index: action.payload
            });
        case 'GET_MODULE_DETAIL':
            let moduleHistory = state.moduleHistory;
            moduleHistory.push(action.payload);

            return Object.assign({}, state, {
                moduleHistory: moduleHistory
            });

        default:
            return state;
    }
}