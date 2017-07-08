import Axios from 'Axios'
import {createAction} from 'redux-actions'

export const setItemsFetching = createAction('SET_FETCHING', is => is);
export const setItems = createAction('SET_ITEMS', items => items);

export function getItems(filter = {}) {
    return (dispatch) => {
        dispatch(setItemsFetching(true));
        Axios.post('/items/search', {params: filter})
            .then(response => {
                dispatch(setItems(response.data));
                dispatch(setItemsFetching(false));
            })
    }
}

export function putItem(data) {
    return (dispatch) => {
        Axios.put('/items/', {params: data})
    }
}