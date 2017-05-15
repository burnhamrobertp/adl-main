import {handleActions} from 'redux-actions'

const DEFAULT_STATE = {
    minLevel: null,
    maxLevel: null,
    search: null,
    digitalCopy: false,
    editions: [],
    setting: null,
    moduleLengths: [],
};

export default handleActions({
    SET_FILTER_EDITIONS: (state, action) => ({
        ...state,
        editions: action.payload
    }),
    SET_FILTER_SETTING: (state, action) => ({
        ...state,
        setting: action.payload
    }),
    SET_FILTER_MINLEVEL: (state, action) => ({
        ...state,
        minLevel: action.payload
    }),
    SET_FILTER_MAXLEVEL: (state, action) => ({
        ...state,
        maxLevel: action.payload
    }),
    SET_FILTER_LENGTHS: (state, action) => ({
        ...state,
        moduleLengths: action.payload
    })
}, DEFAULT_STATE);