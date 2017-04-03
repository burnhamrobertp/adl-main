
const DEFAULT_STATE = {
    edition: [],
    minLevel: 0,
    maxLevel: 20,
    adventureLength: [],
    search: '',
    digitalCopy: false,
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'CHANGE_SERCH':
            return Object.assign({}, state, {
                search: action.payload
            });
        
        default:
            return state;
    }
}