const DEFAULT_STATE = {
    isFetchingList: false,
    isFetchingModule: false,
    // ordered list of lite module data
    list: [],
    // id-indexed object of full module data
    index: {},
    // history of modules viewed / edited
    moduleHistory: []
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'SET_MODULES_FETCHING':
            return Object.assign({}, state, {
                isFetchingList: action.payload
            });
        case 'SET_MODULE_FETCHING':
            return Object.assign({}, state, {
                isFetchingModule: action.payload
            });
        case 'SET_MODULE_VISITED':
            let visitedHistory = state.moduleHistory.slice(0);
            visitedHistory.unshift(action.payload);

            visitedHistory = visitedHistory.filter((id, index, self) =>
                self.findIndex(moduleId => moduleId === id) === index
            );

            return Object.assign({}, state, {
                moduleHistory: visitedHistory
            });
        case 'GET_MODULES':
            return Object.assign({}, state, {
                isFetchingList: false,
                list: action.payload.data
            });
        case 'GET_MODULE_DETAIL':
            let index = Object.assign({}, state.index),
                data = action.payload.data;

            index[data.id] = data;
            // copy the history - do not modify it in place - and then add this module to the front
            let moduleHistory = state.moduleHistory.slice(0);
            moduleHistory.unshift(data.id);
            // reduce any resulting duplications by looping through the history and on each iteration, search
            // itself for the index of the first instance of this iteration's id. If that index is not the
            // index of the current item, the outer closure will return false and the item will be removed
            moduleHistory = moduleHistory.filter((id, index, self) =>
                self.findIndex(moduleId => moduleId === id) === index
            );

            return Object.assign({}, state, {
                isFetchingModule: false,
                index: index,
                moduleHistory: moduleHistory
            });

        default:
            return state;
    }
}