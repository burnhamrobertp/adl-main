const DEFAULT_STATE = {
    sortBy: 'name'
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'SET_MODULE_SORT':
            return Object.assign({}, state, {sortBy: action.payload});
        default:
            return state;
    }
}
