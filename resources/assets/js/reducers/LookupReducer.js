const DEFAULT_STATE = {
    editions: window.editions,
    settings: window.settings,
    moduleLengths: window.moduleLengths
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'GET_LOOKUP_EDITIONS':
            return Object.assign({}, state, {
                editions: action.payload
            });
        case 'GET_LOOKUP_SETTINGS':
            return Object.assign({}, state, {
                settings: action.payload
            });
        case 'GET_LOOKUP_LENGTHS':
            return Object.assign({}, state, {
                adventureLengths: action.payload
            });
        default:
            return state;
    }
}