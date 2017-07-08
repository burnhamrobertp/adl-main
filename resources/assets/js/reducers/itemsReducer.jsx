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
    SET_ITEMS: (state, action) => ({
        ...state,
        search: action.payload
    })
}, DEFAULT_STATE);