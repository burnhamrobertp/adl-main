import {handleActions} from 'redux-actions'

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

export default handleActions({
    SET_MODULES_FETCHING: (state, action) => ({
        ...state,
        isFetchingList: action.payload
    }),
    SET_MODULE_FETCHING: (state, action) => ({
        ...state,
        isFetchingModule: action.payload
    }),
    SET_MODULE_VISITED: (state, action) => {
        let visitedHistory = state.moduleHistory.slice(0);
        visitedHistory.unshift(action.payload);

        visitedHistory = visitedHistory.filter((id, index, self) =>
            self.findIndex(moduleId => moduleId === id) === index
        );

        return {
            ...state,
            moduleHistory: visitedHistory
        }
    },
    GET_MODULES: (state, action) => ({
        ...state,
        isFetchingList: false,
        list: action.payload.data
    }),
    GET_MODULE_DETAIL: (state, action) => {
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

        return {
            ...state,
            isFetchingModule: false,
            index: index,
            moduleHistory: moduleHistory
        };
    },
}, DEFAULT_STATE);