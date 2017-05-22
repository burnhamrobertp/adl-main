import Axios from 'Axios'
import {createAction} from 'redux-actions'

export const setCreatureFetching = createAction('SET_FETCHING', is => is);
export const setCreature = createAction('SET_CREATURE', creature => creature);
export const setCreatures = createAction('SET_CREATURES', creatures => creatures);

export function getCreatures(filter = {}) {
    return (dispatch) => {
        dispatch(setCreatureFetching(true));
        Axios.post('/creatures/search', {params: filter})
            .then(response => {
                dispatch(setCreatures(response.data));
                dispatch(setCreatureFetching(false));
            })
    }
}

export function putCreature(data) {
    return (dispatch) => {
        Axios.put('/creature/', params: data)
    }
}