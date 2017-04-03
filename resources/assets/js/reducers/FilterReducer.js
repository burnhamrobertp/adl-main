
const DEFAULT_STATE = {
    editions: [],
    minLevel: 0,
    maxLevel: 20,
    adventureLength: [],
    search: '',
    digitalCopy: false,
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'GET_FILTER_LENGTHS':
            return Object.assign({}, state, {
                editions: action.payload
            });
        case 'GET_FILTER_EDITIONS':
            return Object.assign({}, state, {
                adventureLength: action.payload
            });
    
        default:
            return state;
    }
}