const DEFAULT_STATE = {
    isFetchingIndex: false,
    isFetchingModule: false,
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
        case 'SET_MODULES_FETCHING':
            return Object.assign({}, state, {
                isFetchingIndex: action.payload
            });
        case 'SET_MODULE_FETCHING':
            return Object.assign({}, state, {
                isFetchingModule: action.payload
            });
        case 'GET_MODULES':
            return Object.assign({}, state, {
                isFetchingIndex: false,
                index: action.payload
            });
        case 'GET_MODULE_DETAIL':
            let moduleHistory = state.moduleHistory;
            moduleHistory.push(action.payload);

            return Object.assign({}, state, {
                isFetchingModule: false,
                moduleHistory: moduleHistory
            });

        default:
            return state;
    }
}