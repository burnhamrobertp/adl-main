import {handleActions} from 'redux-actions'

const DEFAULT_STATE = {
    editions: window.editions,
    moduleLengths: window.moduleLengths,
    publishers: window.publishers,
    settings: window.settings,
};

export default handleActions({
    GET_LOOKUP_EDITIONS: (state, action) => ({
        ...state,
        editions: action.payload.data
    }),
    GET_LOOKUP_SETTINGS: (state, action) => ({
        ...state,
        settings: action.payload.data
    }),
    GET_LOOKUP_LENGTHS: (state, action) => ({
        ...state,
        adventureLengths: action.payload.data
    }),
    GET_LOOKUP_PUBLISHERS: (state, action) => ({
        ...state,
        publishers: action.payload.data
    })
}, DEFAULT_STATE);