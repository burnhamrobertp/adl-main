const DEFAULT_STATE = {
    isFetchingIndex: false,
    isFetchingModule: false,
    index: [],
    moduleHistory: [],

    currentModule: (moduleHistory) => {
        return moduleHistory.length > 0 ? moduleHistory[0] : {};
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
            let moduleHistory = state.moduleHistory.slice(0);
            moduleHistory.unshift(action.payload);
            // reduce any resulting duplications
            moduleHistory = moduleHistory.filter((value, index, self) => {
                const foundValue = self.findIndex(m => m.id === value.id);

                return foundValue === index;
            });

            return Object.assign({}, state, {
                isFetchingModule: false,
                moduleHistory: moduleHistory
            });

        default:
            return state;
    }
}