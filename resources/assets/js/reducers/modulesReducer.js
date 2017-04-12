const DEFAULT_STATE = {
    index: [],
    moduleHistory: [],

    currentModule: (moduleHistory) => {
        const
            historyLength = moduleHistory.length,
            hasHistory = historyLength > 0;

        return hasHistory ? moduleHistory[historyLength - 1] : {};
    }
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