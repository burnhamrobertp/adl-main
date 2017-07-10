import Axios from 'axios'
import {createAction} from 'redux-actions'

// Sets the value of modules.isFetchingList
export const setModulesFetching = createAction('SET_MODULES_FETCHING', isFetching => isFetching);
// Sets the value of modules.isFetchingModule
export const setModuleFetching = createAction('SET_MODULE_FETCHING', isFetching => isFetching);
// Adds a module to the moduleHistory from the index
export const setModuleVisited = createAction('SET_MODULE_VISITED', id => parseInt(id));
// Sets the module data to the index
export const setModule = createAction('SET_MODULE', module => module);
// Sets the "editing module" data from the index
export const setModuleEditing = createAction('SET_MODULE_EDITING', moduleId => moduleId);
// Sets a piece of the editing module data
export const setModuleEditingPiece = createAction('SET_MODULE_EDITING_PIECE', data => data);

export function getModules(filters = {}) {
    return (dispatch) => {
        dispatch(setModulesFetching(true));
        Axios.get('/modules/', {params: filters})
            .then(response => {
                dispatch({type: 'GET_MODULES', payload: response.data});
                dispatch(setModulesFetching(false));
            });
    }
}

export function getModule(id) {
    return (dispatch, getState) => {
        const state = getState();
        if (state.modules.index[id] && state.modules.index[id].id) {
            dispatch(setModuleVisited(id));
        } else {
            dispatch(setModuleFetching(true));
            Axios.get(`/modules/${id}`)
                .then(response => {
                    dispatch(setModule(response.data));
                    dispatch(setModuleVisited(response.data.id));
                    dispatch(setModuleFetching(false));
                });
        }
    }
}

export function getModuleEdit(id) {
    return (dispatch, getState) => {
        const state = getState();

        if (state.modules.index[id] && state.modules.index[id].id) {
            dispatch(setModuleEditing(id));
            dispatch(setModuleVisited(id));
        } else {
            dispatch(setModuleFetching(true));
            Axios.get(`/modules/${id}`)
                .then(response => {
                    dispatch(setModule(response.data));
                    dispatch(setModuleEditing(response.data.id));
                    dispatch(setModuleVisited(response.data.id));
                    dispatch(setModuleFetching(false));
                })
        }
    }
}

export const putModuleRating = createAction('GET_CHANGE_MODULE_RATING', (id, rating) =>
    Axios.post(`/modules/${id}`, {rating: rating})
);

export const putModule = createAction('PUT_MODULE', moduleForm =>
    Axios.post(`/modules/${moduleForm.get('id') || ''}`, moduleForm)
);