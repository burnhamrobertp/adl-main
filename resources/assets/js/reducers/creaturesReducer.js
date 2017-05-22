import {handleActions} from 'redux-actions'

const DEFAULT_STATE = {
    isFetching: false,
    search: [],
    // object being edited
    editing: {}
};

export default handleActions({
    SET_FETCHING: (state, action) => ({
        ...state,
        isFetching: action.payload
    }),
    SET_CREATURE: (state, action) => ({
        ...state,
        search: {
            ...state.search,
            [action.payload.id]: action.payload
        }
    }),
    SET_CREATURES: (state, action) => ({
        ...state,
        search: action.payload
    })
}, DEFAULT_STATE);