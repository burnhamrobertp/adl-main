import {handleActions} from 'redux-actions'

const DEFAULT_STATE = {
    isFetchingList: false,
    isFetchingModule: false,
    // ordered list of lite module data
    list: [],
    // id-indexed object of full module data
    index: {},
    // history of modules viewed / edited
    moduleHistory: [],
    // object being edited
    editing: {}
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
    SET_MODULE: (state, action) => ({
        ...state,
        index: {
            ...state.index,
            [action.payload.id]: action.payload
        }
    }),
    SET_MODULE_EDITING: (state, action) => ({
        ...state,
        editing: state.index[action.payload] || {}
    }),
    SET_MODULE_EDITING_PIECE: (state, action) => ({
        ...state,
        editing: {
            ...state.editing,
            ...action.payload
        }
    }),
    SET_MODULE_VISITED: (state, action) => ({
        ...state,
        moduleHistory: [action.payload, ...state.moduleHistory].filter((id, index, self) =>
            self.findIndex(moduleId => moduleId === id) === index
        )
    }),
    GET_MODULES: (state, action) => ({
        ...state,
        list: action.payload
    }),
}, DEFAULT_STATE);