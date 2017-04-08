const DEFAULT_STATE = {
    minLevel: null,
    maxLevel: null,
    search: null,
    digitalCopy: false,
    editions: [],
    setting: null,
    moduleLengths: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'SET_FILTER_EDITIONS':
            return Object.assign({}, state, {
                editions: action.payload
            });
        case 'SET_FILTER_SETTING':
            return Object.assign({}, state, {
                setting: action.payload
            });
        case 'SET_FILTER_MINLEVEL':
            return Object.assign({}, state, {
                minLevel: action.payload
            });
        case 'SET_FILTER_MAXLEVEL':
            return Object.assign({}, state, {
                maxLevel: action.payload
            });
        case 'SET_FILTER_LENGTHS':
            return Object.assign({}, state, {
                moduleLengths: action.payload
            });
        default:
            return state;
    }
}